import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newStatus, setNewStatus] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("http://localhost:3003/order");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:3003/order/${orderId}`);
      // Rafraîchir la liste des commandes après la suppression
      const response = await axios.get("http://localhost:3003/order");
      setOrders(response.data);
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const handleUpdateOrder = async () => {
    try {
      await axios.patch(`http://localhost:3003/order/${selectedOrderId}`, { status: newStatus });
      // Rafraîchir la liste des commandes après la mise à jour
      const response = await axios.get("http://localhost:3003/order");
      setOrders(response.data);
      // Cacher la boîte de dialogue après la mise à jour
      setShowModal(false);
    } catch (error) {
      console.error("Error updating order:", error);
    }
  };

  const openModal = (orderId) => {
    setSelectedOrderId(orderId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto text-black">
      <h1 className="text-3xl font-bold mb-4">Liste des commandes</h1>
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
                <button className="text-indigo-600 hover:text-indigo-900" onClick={() => openModal(order.id)}>Mettre à jour</button>
                <button className="text-red-600 hover:text-red-900 ml-2" onClick={() => handleDeleteOrder(order.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Boîte de dialogue pour la mise à jour de la commande */}
      <Modal isOpen={showModal} onRequestClose={closeModal} className="modal">
        <div className="modal-content">
          <h2 className="text-2xl font-bold mb-4 text-black">Modifier le statut de la commande</h2>
          <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className="w-full border rounded-md py-2 px-3 mb-4">
            <option value="TRAITEE">Traitee</option>
            <option value="ENCOURS">En cours</option>
            <option value="EXPEDIEE">Expédiée</option>
          </select>
          <div className="flex justify-end">
            <button onClick={handleUpdateOrder} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Confirmer</button>
            <button onClick={closeModal} className="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">Annuler</button>
          </div>
        </div>
      </Modal>

    </div>
  );
};

export default OrdersPage;
