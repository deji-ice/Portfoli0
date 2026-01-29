import '@testing-library/jest-dom'
import 'whatwg-fetch'

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};
