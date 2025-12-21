export default function StepProducts({ data }) {
  return (
    <>
      <h3>Products & Summary</h3>

      <p><b>Mandatory:</b> Jersey (₹1500)</p>

      <label>
        <input type="checkbox" /> Basketball (₹1200)
      </label>

      <label>
        <input type="checkbox" /> Wrist Support (₹500)
      </label>

      <h4>Summary</h4>
      <pre>{JSON.stringify(data, null, 2)}</pre>

      <button>Pay Now</button>
    </>
  );
}
