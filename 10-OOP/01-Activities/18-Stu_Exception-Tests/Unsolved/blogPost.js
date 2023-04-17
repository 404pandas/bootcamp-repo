class BlogPost {
  constructor(authorName) {
    // Checks to see that the password is at least 3 characters long.If it's not an error is thrown.
    if (authorName.length < 3) {
      throw new Error('Author must be at least 3 characters long.');
    }

    // Regex for only allowing uppercase, lowercase, numbers, dashes, and underscores.
    const pattern = new RegExp('([A-Za-z0-9_-]+$)');

    // Checks to see that authorName matches Regex pattern. If it doesn't an error is thrown.
    if (!pattern.test(authorName)) {
      throw new Error(
        'Author must only contain letters, numbers, dashes, and underscores.'
      );
    }

    this.authorName = authorName;
  }
}

module.exports = BlogPost;
