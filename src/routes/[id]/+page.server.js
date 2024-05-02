export const load = async ({ url, params, fetch }) => {
    const id = params.id;
    return {
        id: id,
        md: await fetch(`/articles/${id}.md`).then(r => r.text())
    };
}