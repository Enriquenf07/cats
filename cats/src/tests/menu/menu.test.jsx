import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, test, vi } from "vitest";
import Menu from "../../Menu";
import { act } from "react-dom/test-utils";



it('updates the state when the button is clicked', () => {
  const mockHandler = vi.fn();
  const index = 0
  const setIndex = () => 1

  render(<Menu index={index} setIndex={setIndex}/>);
  const button = screen.getAllByRole('button');

  button.forEach((i) => fireEvent.click(i));

});


