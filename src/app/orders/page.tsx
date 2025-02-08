import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../components/ui/table";
import { Button } from "../../components/ui/button";
import { orders } from "@/utils/data";
const Orders = () => {
  return (
    <div className="p-10 w-full  ">
      <h1 className="text-2xl text-gray-400">All Orders</h1>
      <div className="shadow-[0_0_10px_3px_#f0d786] min-h-[500px] h-full rounded-md p-2  mt-2 ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>#</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Payment</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.orderDate}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.payment}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button size="sm" variant="outline" className="mr-2">
                    View
                  </Button>
                  <Button size="sm" className="bg-[#b88e2f] hover:bg-[#f0d786] hover:text-gray-700">
                    Cancel
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
export default Orders;