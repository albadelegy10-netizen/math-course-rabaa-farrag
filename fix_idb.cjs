const fs = require('fs');
let code = fs.readFileSync('lessonService.ts', 'utf8');

// Add import
code = "import { get, set } from 'idb-keyval';\n" + code;

// Remove old loadFromLocal
code = code.replace(/\/\/ Attempt to load from localStorage first[\s\S]*?\} catch \(e\) \{ console\.error\("Local storage read error", e\); \}/, 
`// IDB load is handled asynchronously
let idbLoadPromise = get('app_lessons_cache').then(cached => {
    if (cached) {
        let parsed = typeof cached === 'string' ? JSON.parse(cached) : cached;
        Object.keys(parsed).forEach(k => {
            if (!lessonCache[k]) lessonCache[k] = parsed[k];
        });
    }
}).catch(e => console.error("IDB read error", e));`);

// Replace persistToLocal
code = code.replace(/const persistToLocal = \(\) => \{[\s\S]*?\n\};\n/, 
`const persistToLocal = () => {
    set('app_lessons_cache', lessonCache).catch(e => {
        console.error("IDB write error", e);
    });
};\n`);

// Update getAllLessons to wait for idbLoadPromise before initialSyncPromise
code = code.replace(/if \(!initialSyncPromise\) \{/, 
`if (!initialSyncPromise) {
            initialSyncPromise = idbLoadPromise.then(() => {
                return new Promise<void>((resolve) => {
                    onSnapshot(collection(db, 'lessons'), (snap) => {
                        snap.forEach(d => {
                            const data = d.data();
                            const rawLesson = {
                                id: d.id,
                                title: data.title,
                                description: data.description,
                                icon: data.icon,
                                studyNotes: data.studyNotes,
                                questions: data.questions,
                                course: data.course,
                                type: data.type,
                                order: data.order,
                                deleted: data.deleted
                            };
                            lessonCache[d.id] = cleanUndefined(rawLesson) as any;
                        });
                        isInitialSyncDone = true;
                        persistToLocal();
                        notifySubscribers();
                        resolve();
                    }, (e) => {
                        console.error("Firebase onSnapshot error:", e);
                        resolve(); // Resolve anyway to not block
                    });
                });
            }).catch(e => {
                console.warn("Could not sync with Firestore (Offline or Network Error). Using cached/static data.", e instanceof Error ? e.message : String(e));
            });
        }
        // Early return logic to avoid duplicating the onSnapshot block which was inside initialSyncPromise
`);

// The above replace might be messy. Let's do it cleaner.
