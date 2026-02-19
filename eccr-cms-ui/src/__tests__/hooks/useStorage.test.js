import { act, render } from '@testing-library/react';
import { useLocalStorage, useSessionStorage } from '@/hooks/useStorage';

jest.unmock('@/hooks/useStorage');

describe('useStorage', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
  });

  describe('useLocalStorage', () => {
    it('should return the default value', () => {
      let hookResult;
      function TestComponent() {
        hookResult = useLocalStorage('test', '777');
        return <div>{hookResult[0]}</div>;
      }
      
      render(<TestComponent />);
      expect(hookResult[0]).toBe('777');
    });

    it('should return the value from local storage', () => {
      window.localStorage.setItem('test', JSON.stringify('999'));
      let hookResult;
      function TestComponent() {
        hookResult = useLocalStorage('test', '777');
        return <div>{hookResult[0]}</div>;
      }
      
      render(<TestComponent />);
      expect(hookResult[0]).toBe('999');
    });

    it('should set the value to local storage', () => {
      let hookResult;
      function TestComponent() {
        hookResult = useLocalStorage('test', '777');
        return <div>{hookResult[0]}</div>;
      }
      
      render(<TestComponent />);
      act(() => {
        hookResult[1]('999');
      });
      expect(window.localStorage.getItem('test')).toBe(JSON.stringify('999'));
    });

    it('should remove the value from local storage', () => {
      window.localStorage.setItem('test', JSON.stringify('999'));
      let hookResult;
      function TestComponent() {
        hookResult = useLocalStorage('test', '777');
        return <div>{hookResult[0]}</div>;
      }
      
      render(<TestComponent />);
      act(() => {
        hookResult[2]();
      });
      expect(window.localStorage.getItem('test')).toBe(null);
    });
  });

  describe('useSessionStorage', () => {
    it('should return the default value', () => {
      let hookResult;
      function TestComponent() {
        hookResult = useSessionStorage('test', '777');
        return <div>{hookResult[0]}</div>;
      }
      
      render(<TestComponent />);
      expect(hookResult[0]).toBe('777');
    });

    it('should return the value from session storage', () => {
      window.sessionStorage.setItem('test', JSON.stringify('999'));
      let hookResult;
      function TestComponent() {
        hookResult = useSessionStorage('test', '777');
        return <div>{hookResult[0]}</div>;
      }
      
      render(<TestComponent />);
      expect(hookResult[0]).toBe('999');
    });

    it('should set the value to session storage', () => {
      let hookResult;
      function TestComponent() {
        hookResult = useSessionStorage('test', '777');
        return <div>{hookResult[0]}</div>;
      }
      
      render(<TestComponent />);
      act(() => {
        hookResult[1]('999');
      });
      expect(window.sessionStorage.getItem('test')).toBe(JSON.stringify('999'));
    });

    it('should remove the value from session storage', () => {
      window.sessionStorage.setItem('test', JSON.stringify('999'));
      let hookResult;
      function TestComponent() {
        hookResult = useSessionStorage('test', '777');
        return <div>{hookResult[0]}</div>;
      }
      
      render(<TestComponent />);
      act(() => {
        hookResult[2]();
      });
      expect(window.sessionStorage.getItem('test')).toBe(null);
    });
  });

});
