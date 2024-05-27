





// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loading, setLoading] = useState(true);

//   const cat = useLocation().search;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts${cat}`);
//         const maxPostsPerPage = 10;
//         const totalPosts = res.data.length;
//         setTotalPages(Math.ceil(totalPosts / maxPostsPerPage));
//         setPosts(res.data.slice((currentPage - 1) * maxPostsPerPage, currentPage * maxPostsPerPage));
//         setLoading(false);
//       } catch (err) {
//         console.log(err);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, [cat, currentPage]);

//   const getText = (html) => {
//     const doc = new DOMParser().parseFromString(html, "text/html");
//     return doc.body.textContent;
//   };

//   const handlePagination = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="home">
//       <div className="posts">
//         {posts.map((post) => (
//           <div className="post" key={post.id}>
//             <div className="img">
//               <img src={`../upload/${post.img}`} alt="" />
//             </div>
//             <div className="content">
//               <Link className="link" to={`/post/${post.id}`}>
//                 <h1>{post.title}</h1>
//               </Link>
//               <p>{getText(post.desc)}</p>
//               <Link className="link" to={`/post/${post.id}`}>
//                 <button>Read More</button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button key={index + 1} onClick={() => handlePagination(index + 1)}>
//             {index + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;







// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import axios from "axios";

// const Home = () => {
//   const [posts, setPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   const cat = useLocation().search;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`/posts${cat}`);
//         const totalPosts = res.data.length;
//         const maxPostsPerPage = 10;
//         setTotalPages(Math.ceil(totalPosts / maxPostsPerPage));
//         setPosts(res.data.slice((currentPage - 1) * maxPostsPerPage, currentPage * maxPostsPerPage));
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, [cat, currentPage]);

//   const getText = (html) => {
//     const doc = new DOMParser().parseFromString(html, "text/html");
//     return doc.body.textContent;
//   };

//   const handlePagination = (pageNumber) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="home">
//       <div className="posts">
//         {posts.map((post) => (
//           <div className="post" key={post.id}>
//             <div className="img">
//               <img src={`../upload/${post.img}`} alt="" />
//             </div>
//             <div className="content">
//               <Link className="link" to={`/post/${post.id}`}>
//                 <h1>{post.title}</h1>
//               </Link>
//               <p>{getText(post.desc)}</p>
//               <Link className="link" to={`/post/${post.id}`}>
//                 <button>Read More</button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="pagination">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button key={index + 1} onClick={() => handlePagination(index + 1)}>{index + 1}</button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;




