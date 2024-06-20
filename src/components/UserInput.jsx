export function UserInput({ onInputChange, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
            value={userInput.initialInvestment}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
            }
            value={userInput.annualInvestment}
          ></input>
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
            value={userInput.expectedReturn}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(event) => onInputChange("duration", event.target.value)}
            value={userInput.duration}
          ></input>
        </p>
      </div>
    </section>
  );
}
