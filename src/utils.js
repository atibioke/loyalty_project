const paginate = (posts) => {
    const itemsPerPage = 6
    const numberOfPages = Math.ceil(posts.length / itemsPerPage)
  
    const newposts = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage
      return posts.slice(start, start + itemsPerPage)
    })
  
    return newposts
  }

  export default paginate;