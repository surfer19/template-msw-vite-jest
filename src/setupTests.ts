// setupTests.js

import "@testing-library/jest-dom";
import { mswServer } from "./mocks/node";

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());
