// import React, { useState } from 'react';
// import './dashboard.css';
// import MessageInput from './message';

// const Dashboard = () => {
//   const [formData, setFormData] = useState({ region: '', userType: '' });
//   const [errors, setErrors] = useState({});
//   const loggedInUser = { region: 'Eastern', userType: 'buyer' };

//   const allUsers = [
//     { id: 1, name: 'John', userType: 'farmer', region: 'Central', quantity: 10, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
//     { id: 2, name: 'Joyce', userType: 'farmer', region: 'Eastern', quantity: 8, contact: '234-567-8901' },
//     { id: 3, name: 'Dora', userType: 'buyer', region: 'Western' },
//     { id: 4, name: 'Peter', userType: 'farmer', region: 'Northern' },
//     { id: 5, name: 'Daisy', userType: 'farmer', region: 'Southern' },
//     { id: 6, name: 'Henry', userType: 'buyer', region: 'Central' },
//     { id: 7, name: 'Kenneth', userType: 'farmer', region: 'Eastern' },
//     { id: 8, name: 'Patricia', userType: 'farmer', region: 'Western' },
//     { id: 9, name: 'Shana', userType: 'buyer', region: 'Northern' },
//     { id: 10, name: 'Isaac', userType: 'farmer', region: 'Central' },
//     { id: 11, name: 'Anna', userType: 'farmer', region: 'Eastern' },
//     { id: 12, name: 'Reyna', userType: 'buyer', region: 'Western' },
//     { id: 13, name: 'Docus', userType: 'buyer', region: 'Western' },
//     { id: 14, name: 'Sam', userType: 'farmer', region: 'Northern' },
//     { id: 15, name: 'Martha', userType: 'farmer', region: 'Southern' },
//     { id: 16, name: 'Hellen', userType: 'buyer', region: 'Central' },
//     { id: 17, name: 'Cornrad', userType: 'farmer', region: 'Eastern' },
//     { id: 18, name: 'Pricilla', userType: 'farmer', region: 'Western' },
//     { id: 19, name: 'Shadrach', userType: 'buyer', region: 'Northern' },
//     { id: 20, name: 'Isaiah', userType: 'farmer', region: 'Central' },
//     { id: 21, name: 'Abel', userType: 'farmer', region: 'Eastern' },
//     { id: 22, name: 'Recheal', userType: 'buyer', region: 'Western' },
//     { id: 23, name: 'Gladys', userType: 'buyer', region: 'Western' },
//     { id: 44, name: 'Unice', userType: 'farmer', region: 'Northern' },
//     { id: 25, name: 'Dorothy', userType: 'farmer', region: 'Southern' },
//     { id: 26, name: 'Hagai', userType: 'buyer', region: 'Central' },
//     { id: 27, name: 'Ken', userType: 'farmer', region: 'Eastern' },
//     { id: 28, name: 'Rebecca', userType: 'farmer', region: 'Western' },
//     { id: 29, name: 'Elizabeth', userType: 'buyer', region: 'Northern' },
//     { id: 30, name: 'Ezekiel', userType: 'farmer', region: 'Central' },
//   ];

//   const allfarmers = allUsers.filter(user => user.userType === 'farmer');
//   const allbuyers = allUsers.filter(user => user.userType === 'buyer');
//   const allUsersByRegion = {
//     Central: allUsers.filter(user => user.region === 'Central'),
//     Eastern: allUsers.filter(user => user.region === 'Eastern'),
//     Western: allUsers.filter(user => user.region === 'Western'),
//     Northern: allUsers.filter(user => user.region === 'Northern'),
//     Southern: allUsers.filter(user => user.region === 'Southern'),
//   };

//   const initialVisibleUsers = allUsersByRegion[loggedInUser.region] || [];

//   const [visibleUsers, setVisibleUsers] = useState(initialVisibleUsers);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [messages, setMessages] = useState([]);

//   const handleSendMessage = (user) => {
//     const newMessage = {
//       sender: loggedInUser.userType,
//       receiver: user.userType,
//       content: 'Your default message content here.',
//     };

//     setMessages([...messages, newMessage]);
//   };

//   const handleSendButtonClick = (user) => {
//     handleSendMessage(user);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });

//     if (name === 'region') {
//       const selectedRegion = value;
//       setVisibleUsers(allUsersByRegion[selectedRegion] || []);
//     } else if (name === 'userType') {
//       const allUsersOfType = value === 'buyer' ? allbuyers : allfarmers;
//       setVisibleUsers(allUsersOfType);
//     }
//   };

//   return (
//     <div className='dashboard-container'>
//       <div>
//         {selectedUser && (
//           <div>
//             <h2>Messages with {selectedUser.name}</h2>
//             <div>
//               {messages.map((msg, index) => (
//                 <div key={index}>
//                   <strong>{msg.sender}:</strong> {msg.content}
//                 </div>
//               ))}
//             </div>
//             <MessageInput onSendMessage={(message) => handleSendMessage(selectedUser)} />
//           </div>
//         )}
//       </div>
//       <div>
//         Filter By Region and User Type:
//         <div className="">
//           <label>Region</label>
//           <select
//             name="region"
//             value={formData.region}
//             onChange={handleChange}
//             className=""
//           >
//             <option value="">Select Region</option>
//             <option value="Central">Central</option>
//             <option value="Eastern">Eastern</option>
//             <option value="Western">Western</option>
//             <option value="Northern">Northern</option>
//             <option value="Southern">Southern</option>
//           </select>
//           {errors.region && <p className="error-message">{errors.region}</p>}
//         </div>
//         <div className="">
//           <label>User Type</label>
//           <select
//             name="userType"
//             value={formData.userType}
//             onChange={handleChange}
//             className=""
//           >
//             <option value="">Select User Type</option>
//             <option value="buyer">Buyer</option>
//             <option value="farmer">Farmer</option>
//           </select>
//           {errors.userType && <p className="error-message">{errors.userType}</p>}
//         </div>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>User Type</th>
//             <th>Region</th>
//             {(formData.userType === 'farmer') ? <th>Quantity</th> : null}
//             {(formData.userType === 'buyer') ? <th>Price</th> : null}
//             <th>
//               <p>Contact</p>
//             </th>
//           </tr>
//         </thead>
//         <tbody>
//           {visibleUsers.map((user) => (
//             <tr key={user.id}>
//               <td>{user.name}</td>
//               <td>{user.userType}</td>
//               <td>{user.region}</td>
//               {(formData.userType === 'farmer') ? <td>{user.quantity}</td> : null}
//               {(formData.userType === 'buyer') ? <td>{user.price}</td> : null}
//               <td>
//                 {user.contact.includes('button') ? (
//                   <button onClick={() => handleSendButtonClick(user)}>
//                     Send Message
//                   </button>
//                 ) : (
//                   user.contact
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState } from 'react';
import './dashboard.css';
import MessageInput from './message';

const Dashboard = () => {
  const [formData, setFormData] = useState({ region: '', userType: '' });
  const [errors, setErrors] = useState({});
  const loggedInUser = { region: 'Eastern', userType: 'buyer' };

  const allUsers = [
    { id: 1, name: 'John', userType: 'farmer', region: 'Central', quantity: 10, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 2, name: 'Joyce', userType: 'farmer', region: 'Eastern', quantity: 8, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 3, name: 'Dora', userType: 'buyer', region: 'Western', price: 50000, contact:'<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 4, name: 'Peter', userType: 'farmer', region: 'Northern', quantity: 10, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 5, name: 'Daisy', userType: 'farmer', region: 'Southern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 6, name: 'Henry', userType: 'buyer', region: 'Central', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 7, name: 'Kenneth', userType: 'farmer', region: 'Eastern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 8, name: 'Patricia', userType: 'farmer', region: 'Western', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 9, name: 'Shana', userType: 'buyer', region: 'Northern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 10, name: 'Isaac', userType: 'farmer', region: 'Central', quantity: 10, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 11, name: 'Anna', userType: 'farmer', region: 'Eastern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 12, name: 'Reyna', userType: 'buyer', region: 'Western', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 13, name: 'Docus', userType: 'buyer', region: 'Western', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 14, name: 'Sam', userType: 'farmer', region: 'Northern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 15, name: 'Martha', userType: 'farmer', region: 'Southern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 16, name: 'Hellen', userType: 'buyer', region: 'Central', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 17, name: 'Cornrad', userType: 'farmer', region: 'Eastern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 18, name: 'Pricilla', userType: 'farmer', region: 'Western', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 19, name: 'Shadrach', userType: 'buyer', region: 'Northern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 20, name: 'Isaiah', userType: 'farmer', region: 'Central', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 21, name: 'Abel', userType: 'farmer', region: 'Eastern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 22, name: 'Recheal', userType: 'buyer', region: 'Western', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 23, name: 'Gladys', userType: 'buyer', region: 'Western', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 44, name: 'Unice', userType: 'farmer', region: 'Northern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 25, name: 'Dorothy', userType: 'farmer', region: 'Southern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 26, name: 'Hagai', userType: 'buyer', region: 'Central', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 27, name: 'Ken', userType: 'farmer', region: 'Eastern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 28, name: 'Rebecca', userType: 'farmer', region: 'Western', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 29, name: 'Elizabeth', userType: 'buyer', region: 'Northern', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
    { id: 30, name: 'Ezekiel', userType: 'farmer', region: 'Central', quantity: 100000, contact: '<button onClick={handleSendMessage}>Send Message</button>' },
  ];

  const allfarmers = allUsers.filter(user => user.userType === 'farmer');
  const allbuyers = allUsers.filter(user => user.userType === 'buyer');
  const allUsersByRegion = {
    Central: allUsers.filter(user => user.region === 'Central'),
    Eastern: allUsers.filter(user => user.region === 'Eastern'),
    Western: allUsers.filter(user => user.region === 'Western'),
    Northern: allUsers.filter(user => user.region === 'Northern'),
    Southern: allUsers.filter(user => user.region === 'Southern'),
  };

  const initialVisibleUsers = allUsersByRegion[loggedInUser.region] || [];

  const [visibleUsers, setVisibleUsers] = useState(initialVisibleUsers);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (user) => {
    const newMessage = {
      sender: loggedInUser.userType,
      receiver: user.userType,
      content: 'Your default message content here.',
    };

    setMessages([...messages, newMessage]);
  };

  const handleSendButtonClick = (user) => {
    if (user.contact && user.contact.includes('button')) {
      handleSendMessage(user);
    } else {
      // Handle non-button contact logic here
      console.log(`Contacting ${user.name} via: ${user.contact}`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'region') {
      const selectedRegion = value;
      setVisibleUsers(allUsersByRegion[selectedRegion] || []);
    } else if (name === 'userType') {
      const allUsersOfType = value === 'buyer' ? allbuyers : allfarmers;
      setVisibleUsers(allUsersOfType);
    }
  };

  return (
    <div className='dashboard-b'>
    <div className='dashboard-container'>
      <div>
        {selectedUser && (
          <div>
            <h2>Messages with {selectedUser.name}</h2>
            <div>
              {messages.map((msg, index) => (
                <div key={index}>
                  <strong>{msg.sender}:</strong> {msg.content}
                </div>
              ))}
            </div>
            <MessageInput onSendMessage={(message) => handleSendMessage(selectedUser)} />
          </div>
        )}
      </div>
      <div>
        <h6>Search by Region or User Type:</h6>
        <div className="typesR">
          <label>Region</label>
          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            className=""
          >
            <option value="">Select Region</option>
            <option value="Central">Central</option>
            <option value="Eastern">Eastern</option>
            <option value="Western">Western</option>
            <option value="Northern">Northern</option>
            <option value="Southern">Southern</option>
          </select>
          {errors.region && <p className="error-message">{errors.region}</p>}
        </div>
        <div className="typesU">
          <label>User Type</label>
          <select
            name="userType"
            value={formData.userType}
            onChange={handleChange}
            className=""
          >
            <option value="">Select User Type</option>
            <option value="buyer">Buyer</option>
            <option value="farmer">Farmer</option>
          </select>
          {errors.userType && <p className="error-message">{errors.userType}</p>}
        </div>
      </div>
      <table>
        <thead className='heads'>
          <tr>
            <th>Name</th>
            <th>User Type</th>
            <th>Region</th>
            {(formData.userType === 'farmer') ? <th>Quantity</th> : null}
            {(formData.userType === 'buyer') ? <th>Price</th> : null}
            <th>
              <p>Contact</p>
            </th>
          </tr>
        </thead>
        <tbody>
          {visibleUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.userType}</td>
              <td>{user.region}</td>
              {(formData.userType === 'farmer') ? <td>{user.quantity}</td> : null}
              {(formData.userType === 'buyer') ? <td>{user.price}</td> : null}
              <td>
                {user.contact && user.contact.includes('button') ? (
                  <button onClick={() => handleSendButtonClick(user)}>
                    Send Message
                  </button>
                ) : (
                  user.contact
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Dashboard;
