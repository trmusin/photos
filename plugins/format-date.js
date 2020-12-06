export const formatDate = (date) => {
    let normalDate = new Date(date).toLocaleString('ru', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
    });

    return normalDate.replace(" г.,", '')
};