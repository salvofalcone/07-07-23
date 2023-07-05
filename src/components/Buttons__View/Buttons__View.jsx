import "./Buttons__View.scss";
import Button from "../Buttons/Button";

const Buttons__View = () => {
  return (
    <div className="MainButton">
      <h2 className="heading2">Buttons</h2>

      {/* NO ICON */}
      <div className="Buttons__Container">
        <p className="Button__Container--Title">Default (no icon)</p>
        <div className="Buttons__Container--Fill">
          <Button label="Xlarge" size="xl" roundness="pill" />
          <Button label="Large" size="lg" roundness="pill" />
          <Button label="Medium" size="md" roundness="pill" />
          <Button label="Small" size="sm" roundness="pill" />
          <Button label="Xsmall" size="xs" roundness="pill" />
        </div>

        <div className="Buttons__Container--Outline">
          <Button label="Xlarge" outline size="xl" roundness="pill" />
          <Button label="Large" outline size="lg" roundness="pill" />
          <Button label="Medium" outline size="md" roundness="pill" />
          <Button label="Small" outline size="sm" roundness="pill" />
          <Button label="Xsmall" outline size="xs" roundness="pill" />
        </div>
      </div>

      {/* ICON RIGHT */}
      <div className="Buttons__Container">
        <p className="Button__Container--Title">Icon Right</p>
        <div className="Buttons__Container--Fill">
          <Button label="Xlarge" size="xl" icon roundness="pill" />
          <Button label="Large" size="lg" icon roundness="pill" />
          <Button label="Medium" size="md" icon roundness="pill" />
          <Button label="Small" size="sm" icon roundness="pill" />
          <Button label="Xsmall" size="xs" icon roundness="pill" />
        </div>

        <div className="Buttons__Container--Outline">
          <Button label="Xlarge" outline size="xl" icon roundness="pill" />
          <Button label="Large" outline size="lg" icon roundness="pill" />
          <Button label="Medium" outline size="md" icon roundness="pill" />
          <Button label="Small" outline size="sm" icon roundness="pill" />
          <Button label="Xsmall" outline size="xs" icon roundness="pill" />
        </div>
      </div>

      {/* ICON LEFT */}
      <div className="Buttons__Container">
        <p className="Button__Container--Title">Icon Left</p>
        <div className="Buttons__Container--Fill">
          <Button label="Xlarge" size="xl" icon iconLeft roundness="pill" />
          <Button label="Large" size="lg" icon iconLeft roundness="pill" />
          <Button label="Medium" size="md" icon iconLeft roundness="pill" />
          <Button label="Small" size="sm" icon iconLeft roundness="pill" />
          <Button label="Xsmall" size="xs" icon iconLeft roundness="pill" />
        </div>

        <div className="Buttons__Container--Outline">
          <Button
            label="Xlarge"
            outline
            size="xl"
            icon
            iconLeft
            roundness="pill"
          />
          <Button
            label="Large"
            outline
            size="lg"
            icon
            iconLeft
            roundness="pill"
          />
          <Button
            label="Medium"
            outline
            size="md"
            icon
            iconLeft
            roundness="pill"
          />
          <Button
            label="Small"
            outline
            size="sm"
            icon
            iconLeft
            roundness="pill"
          />
          <Button
            label="Xsmall"
            outline
            size="xs"
            icon
            iconLeft
            roundness="pill"
          />
        </div>
      </div>

      {/* SQUARE */}
      <div className="Buttons__Container">
        <p className="Button__Container--Title">Square</p>

        <div className="Buttons__Container--Fill">
          <Button label="Xsmall" size="xs" icon roundness="pill" square />
          <Button
            label="Xsmall"
            outline
            size="xs"
            icon
            roundness="pill"
            square
          />
        </div>
      </div>

      {/* ROUNDNESS */}
      <div className="Buttons__Container">
        <p className="Button__Container--Title">Roundness</p>
        <div className="Buttons__Container--Fill">
          <Button label="Pill" size="md" roundness="pill" />
          <Button label="Rounded" size="md" roundness="rounded" />
          <Button label="Sharp" size="md" />
        </div>
      </div>
    </div>
  );
};

export default Buttons__View;
