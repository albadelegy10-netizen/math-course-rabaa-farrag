import React, { useState } from 'react';
import { GroupAssignment } from '../types';
import { X, Save, Trash2 } from 'lucide-react';

interface EditGroupAssignmentModalProps {
  assignment: GroupAssignment;
  onSave: (updates: Partial<Omit<GroupAssignment, 'id' | 'groupId' | 'assignedDate'>>) => Promise<void>;
  onDelete: () => Promise<void>;
  onClose: () => void;
}

const EditGroupAssignmentModal: React.FC<EditGroupAssignmentModalProps> = ({ assignment, onSave, onDelete, onClose }) => {
  const [title, setTitle] = useState(assignment.title || '');
  const [link, setLink] = useState(assignment.link || '');
  const [availableDate, setAvailableDate] = useState(assignment.availableDate || '');
  const [dueDate, setDueDate] = useState(assignment.dueDate || '');
  const [notes, setNotes] = useState(assignment.notes || '');
  const [loading, setLoading] = useState(false);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await onSave({
      title,
      link,
      availableDate,
      dueDate,
      notes
    });
    setLoading(false);
    onClose();
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this assignment for the entire group? This action cannot be undone.')) {
      setLoading(true);
      await onDelete();
      setLoading(false);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
          <div>
            <h2 className="text-xl font-black text-gray-900">Edit Assignment</h2>
            <p className="text-gray-500 font-medium text-sm mt-1">{assignment.type.toUpperCase()}</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={handleSave} className="p-6 space-y-4">
          
          {(assignment.type === 'record' || assignment.type === 'pdf') && (
            <>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Link (URL)</label>
                <input
                  type="url"
                  required
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
                />
              </div>
            </>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Start Date</label>
              <input
                type="date"
                required
                value={availableDate}
                onChange={(e) => setAvailableDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Due Date</label>
              <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">Notes / Instructions</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 bg-white"
              rows={3}
            />
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <button
              type="button"
              onClick={handleDelete}
              disabled={loading}
              className="flex items-center px-4 py-2 text-red-600 font-bold hover:bg-red-50 rounded-lg transition-colors"
            >
              <Trash2 className="w-4 h-4 mr-2" /> Delete
            </button>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-gray-600 font-bold hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg font-bold hover:bg-indigo-700 transition-colors shadow-sm disabled:opacity-50"
              >
                <Save className="w-4 h-4 mr-2" /> {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </form>

      </div>
    </div>
  );
};

export default EditGroupAssignmentModal;
