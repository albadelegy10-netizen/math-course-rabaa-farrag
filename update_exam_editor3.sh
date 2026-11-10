sed -i -e '/const handleSaveAll = () => {/r /dev/stdin' -e '//N' components/ExamEditor.tsx << 'INSERT'
    let currentQuestions = questions;
    if (formData) {
      if (editingId !== null) {
        currentQuestions = currentQuestions.map((q) => (q.id === formData.id ? formData : q));
      } else {
        currentQuestions = [...currentQuestions, { ...formData, id: Date.now() }];
      }
      setQuestions(currentQuestions);
      setEditingId(null);
      setFormData(null);
    }
INSERT
sed -i 's/const size = lessonService.calculateSizeMB({ questions });/const size = lessonService.calculateSizeMB({ questions: currentQuestions });/g' components/ExamEditor.tsx
sed -i 's/questionService.saveQuestions(lessonId, questions);/questionService.saveQuestions(lessonId, currentQuestions);/g' components/ExamEditor.tsx
