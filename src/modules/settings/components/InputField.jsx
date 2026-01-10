export default function InputField({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
  required = false,
  disabled = false,
  error = ""
}) {
  return (
    <div className="space-y-1">
      {label && (
        <label className="block text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      <input
        type={type}
        value={value}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        className={`w-full rounded border px-3 py-2 text-sm
          ${disabled ? "bg-gray-100 cursor-not-allowed" : "bg-white"}
          ${error ? "border-red-500" : "border-gray-300"}
          focus:outline-none focus:ring-1 focus:ring-black`}
      />

      {error && (
        <p className="text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}
