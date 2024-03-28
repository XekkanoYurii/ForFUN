function slugify(title) {
    let toLowerCaseTitle = title.toLowerCase();
    let slug = toLowerCaseTitle.split(' ').join('-')
    return slug
   
}
