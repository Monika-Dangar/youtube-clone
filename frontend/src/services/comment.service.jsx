import api from './api';

// Add new comment
export const addComment = async (data) => {
    console.log(data);

    const res = await api.post('/api/comments', data);
    return res.data;
};

// Edit a comment by ID
export const editComment = async (id, content) => {
    const res = await api.put(`/api/comments/${id}`, { content });
    return res.data;
};

// Delete a comment by ID
export const deleteComment = async (id) => {
    const res = await api.delete(`/api/comments/${id}`);
    return res.data;
};
