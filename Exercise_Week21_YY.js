class BlogPost {
    constructor(title, content, author) {
      this.title = title;
      this.content = content;
      this.author = author;
    }
  
    // Method
    display() {
      console.log(`Title: ${this.title}`);
      console.log(`Author: ${this.author}`);
      console.log(`Content: ${this.content}`);
    }
  }
  
  // instances
  const blogPost1 = new BlogPost("Introduction to JavaScript", "JavaScript is a scripting language...", "John Doe");
  const blogPost2 = new BlogPost("Object-Oriented Programming in JS", "JavaScript supports OOP concepts like classes and objects...", "Jane Smith");

  blogPost1.display();
  blogPost2.display();
  
  