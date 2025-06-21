export default function AccountBalance({ account }) {
  return (
    <span>{`₹${parseFloat(account.balance).toFixed(2)}`}</span>
  );
}