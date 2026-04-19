import NoteEntity from "../domain/entities/noteEntity.js";

export default class NoteService {
  constructor(noteRepository) {
    this.noteRepository = noteRepository;
  }

  async createNote(data) {
    if (!data.title || !data.content) {
      throw new Error("title and content are required");
    }

    const note = new NoteEntity(data);
    return await this.noteRepository.save(note);
  }

  async getNoteByUser(userId) {
    return await this.noteRepository.findByUserId(userId);
  }
}
