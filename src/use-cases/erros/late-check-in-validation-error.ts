export class LateCheckInValidateError extends Error {
  constructor() {
    super('The check-in can only br validate until 20 minutes after creation');
  }
}
