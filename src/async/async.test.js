import { funThatThrows, funThatThrowsAsync } from "./async";
describe('Test throw with Async/Await', () => {
  describe('funThatThrows', () => {
    it('should throw an error if name is missing', () => {
      expect(() => {
        funThatThrows();
      }).toThrow();
    });
  });

  describe('funThatThrowsAsync', () => {
    it('should throw an error if name is missing', () => {
      expect(async () => {
        await funThatThrowsAsync();
      }).rejects.toThrow();
    });

    it('should return the name', async () => {
      const greeting = await funThatThrowsAsync('Steve');
      expect(greeting).toBe('hello Steve');
    });
  });
});