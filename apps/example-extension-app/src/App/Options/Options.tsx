import { useOptions } from '../../Services/Store';

export function Options() {
  const { options, save, reset } = useOptions();

  return (
    <div className="flex h-screen items-center justify-center">
      <form>
        <div>
          <label htmlFor="colorString">colorString</label>
          <input
            type="text"
            id="colorString"
            name="colorString"
            value={options.colorString}
            onChange={(event) => {
              save({ ...options, colorString: event.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="anyBooleans">anyBooleans</label>
          <input
            type="checkbox"
            id="anyBooleans"
            name="anyBooleans"
            checked={options.anyBooleans}
            onChange={(event) => {
              save({ ...options, anyBooleans: !options.anyBooleans });
            }}
          />
        </div>
        <div>
          <label htmlFor="numbersAreFine">numbersAreFine</label>
          <input
            type="text"
            id="numbersAreFine"
            name="numbersAreFine"
            value={options.numbersAreFine}
            onChange={(event) => {
              save({ ...options, numbersAreFine: Number(event.target.value) });
            }}
          />
        </div>
        <button
          type="button"
          onClick={() => {
            reset();
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
