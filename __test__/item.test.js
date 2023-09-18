import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Item } from "../app/components/item";

describe("Item", () => {
  it("renders an item nextLaunchIn", () => {
    const itemProps = {
      child: {
        name: "Name",
        manifest: {
          tags: { categories: ["instagram", "linkedin"] },
        },
        script: "Script",
        nextLaunchIn: 1234,
      },
      index: 1,
    };

    render(<Item {...itemProps} />);

    const label = screen.getByText('20:34 s.');


    expect(label).toBeInTheDocument();
  });
});
