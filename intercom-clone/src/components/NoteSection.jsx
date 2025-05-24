const NoteSection = () => {
  return (
    <div className="bg-yellow-50 p-4 rounded-lg mt-4">
      <h3 className="text-sm font-semibold text-gray-600 mb-2">Note</h3>
      <p className="text-sm text-gray-600 mb-2">
        The customer contacted us to request a refund for an unopened product purchased as a Christmas gift.
      </p>
      <h3 className="text-sm font-semibold text-gray-600 mb-2">Summary</h3>
      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
        <li>Customer bought a product in November as a Christmas gift, but it was not needed.</li>
        <li>Customer wants a refund for the unopened product.</li>
        <li>Teammate asks for product name, purchase location, and email.</li>
        <li>Teammate informs customer that refunds are only available for orders within 60 days and must meet return conditions.</li>
        <li>Customer’s order was placed over 60 days ago, but they request an exception.</li>
      </ul>
    </div>
  );
};

export default NoteSection;