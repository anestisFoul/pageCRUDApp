// Helper For Basic Filtering & Sorting

export default (pages, { text, sortBy }) => {
  return pages.filter((page) => {
    const textMatch = page.description.toLowerCase().includes(text.toLowerCase()) || page.title.toLowerCase().includes(text.toLowerCase())
    return textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      if(a.publishedOn < b.publishedOn) 
        return -1
      else if(a.publishedOn > b.publishedOn)
        return 1
      else
        return 0
    } else if(sortBy === 'title') {
      if(a.title < b.title) 
        return -1
      else if(a.title > b.title)
        return 1
      else
        return 0
    } else if(sortBy === 'active') {
      if(a.isActive < b.isActive) 
        return 1
      else if(a.isActive > b.isActive)
        return -1
      else
        return 0
    }
  });
};
