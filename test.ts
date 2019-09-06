/* eslint-disable no-magic-numbers */
import shuffle from "./index";

test(() => {
  const result = shuffle(["a", "b", "c", "d", "e", "f"]);

  expect(result.includes("a")).toBeTruthy();

  expect(result.includes("b")).toBeTruthy();

  expect(result.includes("c")).toBeTruthy();

  expect(result.includes("d")).toBeTruthy();

  expect(result.includes("e")).toBeTruthy();

  expect(result.includes("f")).toBeTruthy();
});

test(() => {
  expect(shuffle(["a", "b", "c", "d", "e", "f"]).length).toBe(6);
});

test(() => {
  expect(shuffle(["a"]).length).toBe(1);
});

test(() => {
  expect(shuffle(["a"]).includes("a")).toBeTruthy();
});


test(() => {
  const result = shuffle("abcdef");

  expect(result.includes("a")).toBeTruthy();

  expect(result.includes("b")).toBeTruthy();

  expect(result.includes("c")).toBeTruthy();

  expect(result.includes("d")).toBeTruthy();

  expect(result.includes("e")).toBeTruthy();

  expect(result.includes("f")).toBeTruthy();
});

test(() => {
  expect(shuffle("abcdef").length).toBe(6);
});

test(() => {
  expect(shuffle("a").length).toBe(1);
});

test(() => {
  expect(shuffle("a").includes("a")).toBeTruthy();
});
