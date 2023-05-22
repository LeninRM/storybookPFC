import { getDarkMode } from './darkMode';
import { inject, getCurrentInstance } from 'vue';

jest.mock('vue', () => ({
  inject: jest.fn(),
  getCurrentInstance: jest.fn(),
}));

describe('getDarkMode', () => {
  const mockName = 'OnTest';
  const mockDarkModeValue = true;
  beforeEach(() => {
    jest.clearAllMocks();
    (getCurrentInstance as jest.Mock).mockReturnValue({
      type: { name: mockName },
    });
    (inject as jest.Mock).mockReturnValue(mockDarkModeValue);
  });

  it('should return an object with the class name and dark mode value when dark mode is true', () => {
    const result = getDarkMode();
    expect(result).toEqual({ 'test--is-dark': mockDarkModeValue });
  });

  it('should return an object  with a class name without the component name when no component name is available', () => {
    (getCurrentInstance as jest.Mock).mockReturnValueOnce({ type: {} });
    const result = getDarkMode();
    expect(result).toEqual({ '--is-dark': true });
  });

  it('should return an empty object when no dark mode value is available', () => {
    (inject as jest.Mock).mockReturnValueOnce(undefined);
    const result = getDarkMode();
    expect(result).toEqual({});
  });

  it('should return an object with class name with value false when dark mode is false', () => {
    (inject as jest.Mock).mockReturnValueOnce(false);
    const result = getDarkMode();
    expect(result).toEqual({ 'test--is-dark': false });
  });
});
