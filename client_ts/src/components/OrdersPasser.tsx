import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
import { FaSpinner } from "react-icons/fa";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3003/order?status=LIVREE");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="mx-auto text-black w-full">
      {/* Barre de navigation */}
      <nav className="bg-gray-800 p-4 w-full">
        <div className="mx-auto flex justify-between items-center">
          <div className="text-white font-bold">MyApp</div>
          <div>
            <a href="#" className="text-white hover:text-gray-300 mr-4">Accueil</a>
            <a href="#" className="text-white hover:text-gray-300">Commandes</a>
          </div>
        </div>
      </nav>
      <div className="flex flex-col gap-8 container mx-auto items-center gap-3 pt-12">
        <h1 className="text-3xl font-bold mb-4">Liste des commandes Livrées</h1>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <FaSpinner className="animate-spin text-gray-500 text-4xl" />
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3"></th> {/* Colonne vide pour les boutons */}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.orderitem.user.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.orderitem.produit.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{order.orderitem.produit.prix}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* Boutons d'action si nécessaire */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
