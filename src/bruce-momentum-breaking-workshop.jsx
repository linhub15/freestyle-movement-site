export const layout = "navbar_layout.jsx";
export const title = "Bruce Momentum Breaking Workshop";

export default function () {
  return (
    <>
      <a className="block max-w-xs w-full mx-auto rounded-xl p-4 border border-gray-500" href="https://fb.me/e/1pBLjr4Im">
        <img
          className="object-fit rounded-lg"
          src="https://scontent.fyxd2-1.fna.fbcdn.net/v/t39.30808-6/415482952_870629651728883_6032478602826987535_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=d8d9c5&_nc_ohc=k7cdHUamz2UAX8zKh3y&_nc_ht=scontent.fyxd2-1.fna&oh=00_AfD8QrEXdyP_hzIe09gE7XUxVvToYZv6hA8EFEM8s0a-cg&oe=659AB962"
          alt="Bruce Momentum Breaking Workshop"
        />
      </a>

      <div className="pt-12">
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
        <stripe-pricing-table
          pricing-table-id="prctbl_1OUdzkJ1kSEluvIzvPOjmogq"
          publishable-key="pk_live_51OJll2J1kSEluvIzvRDs6akU2WNo5RQ2xUNd5MQ92CAyA4J7CpOTdFm15g4jqoKPm9ip9hc9CR3KTXv0CBEVFa1I00VKExIAPZ"
        >
        </stripe-pricing-table>
      </div>
      <p className="text-center py-6 italic">
        OSD Club members use promo code{" "}
        <code className="px-2 py-1 bg-gray-600 rounded-lg">OSD</code>
      </p>
    </>
  );
}
