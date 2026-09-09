import { Link, router } from '@inertiajs/react'

export default function Index({ posts }) {
    function deletePost( id ) {
        router.delete(`/posts/${id}`);
    }
    return (
        <>
            <h1>List of Posts</h1>
            <hr/>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Body</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { posts && posts.map( (item) => (
                            <tr key={item.id}>
                                <th scope="row">{item.id}</th>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                                <td>
                                    <button className="btn btn-danger" type="button" onClick={() => deletePost(item.id)}>Delete</button>
                                    <Link href={`/posts/${item.id}/edit`} className="btn btn-warning">Edit</Link>
                                    <Link href={`/posts/${item.id}`} className="btn btn-info">Show</Link>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </>
    )
}