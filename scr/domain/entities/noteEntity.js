export default class NoteEntity {
  constructor({ id, title, content, imageUrl, isPrivate, password, userId }) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.imageUrl = imageUrl;
    this.isPrivate = isPrivate;
    this.password = password;
    this.userId = userId;
  }
}
