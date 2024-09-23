import axios from "axios";
import { useState, useEffect } from "react";

const uri = 'http://localhost:3001/crud/'

const CompShow = () => {
    const [blogs, setBlog] = useState([])
    useEffect ( ()=>{
        getBlogs()
    },[])

    const getBlogs = async() =>{
        const res = await axios.get(uri)
        setBlog(res.data)
    }

    const deleteBlog = async (id) =>{
        axios.delete(`${uri}${id}`)
        getBlogs()()
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="table-primary">
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            { blogs.map( (blog) =>(
                                <tr key={blog.id}>
                                    <td>{blog.title}</td>
                                    <td>{blog.content}</td>
                                    <td>
                                        {/* <link to={`/edit/$,{blog.id}`} className="btn btn-info">Editar</link> */}
                                        <button onclickc={ ()=>deleteBlog(blog.id)} className='btn btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShow;