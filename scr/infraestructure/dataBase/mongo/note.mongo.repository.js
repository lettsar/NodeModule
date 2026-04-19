import NoteModel from "./note.model.js";

export default class NoteMongoRepository {
  async save(noteEntity) {
    const savedNote = await NoteModel.create({
      title: noteEntity.title,
      content: noteEntity.content,
      imageUrl: noteEntity.imageUrl,
      isPrivate: noteEntity.isPrivate,
      password: noteEntity.password,
      userId: noteEntity.userId,
    });

    return savedNote.toObject();
  }

  async findByUserId(userId) {
    const notes = await NoteModel.find({ userId });
    return notes.map((note) => note.toObject());
  }
}
