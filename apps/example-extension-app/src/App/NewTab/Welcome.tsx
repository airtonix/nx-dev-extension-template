import { useOptions } from '../../Services/Store';

export function Welcome() {
  const { options } = useOptions();

  return (
    <div className="flex h-screen items-center justify-center">
      <h1>Welcome</h1>
      <h1>Options</h1>
      <pre>{JSON.stringify(options, null, 2)}</pre>
    </div>
  );
}
