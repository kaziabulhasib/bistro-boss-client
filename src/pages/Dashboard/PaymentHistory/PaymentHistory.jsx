import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axisSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axisSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div className='my-16'>
      <h1 className='text-4xl'>Total payments: {payments?.length}</h1>
      <div>
        <div className='overflow-x-auto'>
          <table className='table'>
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Email</th>
                <th>Transaction Id</th>
                <th>Total Price</th>
                <th>Date</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th>{index + 1}</th>
                  <td>{payment.email}</td>
                  <td>{payment.transactionId}</td>
                  <td> $ {payment.price}</td>
                  <td>{payment.date}</td>
                  <td>{payment.status}</td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;
