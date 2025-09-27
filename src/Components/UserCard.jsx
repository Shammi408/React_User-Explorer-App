import React from 'react';

function UserCard({ user }) {
  const { name, username, email, phone, website, company, address } = user;

  return (
    <div className="user-card">
      <h3>{name} <small>({username})</small></h3>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Website:</strong> {website}</p>

      {company?.name && <p><strong>Company:</strong> {company.name}</p>}
      {address?.city && <p><strong>City:</strong> {address.city}</p>}
    </div>
  );
}
export default  UserCard;