'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import './users.css';

// Custom CSS styles
const styles = {
  pageContainer: {
    minHeight: '100vh',
    backgroundColor: '#f8f9fa',
    paddingTop: '2rem',
    paddingBottom: '2rem'
  },
  cardHeader: {
    background: 'linear-gradient(135deg, #4e73df 0%, #224abe 100%)',
    color: 'white',
    borderBottom: 'none'
  },
  card: {
    transition: 'all 0.3s ease',
    boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
  },
  tableContainer: {
    borderRadius: '0.5rem',
    overflow: 'hidden'
  },
  addButton: {
    background: 'white',
    color: '#4e73df',
    fontWeight: 'bold',
    borderRadius: '50px',
    padding: '0.5rem 1.5rem',
    transition: 'all 0.3s ease',
    border: 'none',
    boxShadow: '0 0.125rem 0.25rem rgba(0, 0, 0, 0.075)'
  },
  editButton: {
    background: '#f6c23e',
    border: 'none',
    transition: 'all 0.2s ease'
  },
  deleteButton: {
    background: '#e74a3b',
    border: 'none',
    transition: 'all 0.2s ease'
  },
  tableHead: {
    background: '#f8f9fc',
    color: '#5a5c69',
    fontWeight: 'bold',
    borderBottom: '2px solid #e3e6f0'
  },
  tableRow: {
    transition: 'background-color 0.2s ease'
  }
};

export default function Users() {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);
  
  // Filter users when search term or items change
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredItems(items);
    } else {
      const lowercasedSearch = searchTerm.toLowerCase();
      const filtered = items.filter(item => {
        return (
          (item.firstname && item.firstname.toLowerCase().includes(lowercasedSearch)) ||
          (item.fullname && item.fullname.toLowerCase().includes(lowercasedSearch)) ||
          (item.lastname && item.lastname.toLowerCase().includes(lowercasedSearch)) ||
          (item.username && item.username.toLowerCase().includes(lowercasedSearch)) ||
          (item.address && item.address.toLowerCase().includes(lowercasedSearch)) ||
          (item.id && item.id.toString().includes(lowercasedSearch))
        );
      });
      setFilteredItems(filtered);
    }
  }, [searchTerm, items]);
  
  // Function to view user details
  const handleViewDetails = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  
  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('http://itdev.cmtc.ac.th:3000/api/users');
      if (!res.ok) {
        console.error('Failed to fetch data');
        return;
       }
      const data = await res.json();
      setItems(data);
      setFilteredItems(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถโหลดข้อมูลผู้ใช้ได้',
        confirmButtonColor: '#dc3545'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'ยืนยันการลบ?',
      text: "คุณต้องการลบผู้ใช้นี้ใช่หรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'ใช่, ลบเลย!',
      cancelButtonText: 'ยกเลิก'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
            method: 'DELETE',
          });
          
          if (response.ok) {
            Swal.fire({
              icon: 'success',
              title: 'ลบสำเร็จ!',
              text: 'ลบข้อมูลผู้ใช้เรียบร้อยแล้ว',
              confirmButtonColor: '#4e73df'
            });
            fetchUsers(); // โหลดข้อมูลใหม่
          } else {
            throw new Error('Failed to delete user');
          }
        } catch (error) {
          console.error('Error deleting user:', error);
          Swal.fire({
            icon: 'error',
            title: 'เกิดข้อผิดพลาด',
            text: 'ไม่สามารถลบข้อมูลผู้ใช้ได้',
            confirmButtonColor: '#dc3545'
          });
        }
      }
    });
  };

  return (
    <>
    <div className="container-fluid py-4" style={styles.pageContainer}>
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={styles.card}>
            <div className="card-header py-3 d-flex justify-content-between align-items-center" style={styles.cardHeader}>
              <h4 className="mb-0 fw-bold">
                <i className="bi bi-people-fill me-2"></i>
                จัดการข้อมูลผู้ใช้
              </h4>
              <Link href="/admin/users/add" className="btn" style={styles.addButton}>
                <i className="bi bi-person-plus-fill me-1"></i>
                เพิ่มผู้ใช้ใหม่
              </Link>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive" style={styles.tableContainer}>
                <table className="table table-hover mb-0">
                  <thead style={styles.tableHead}>
                    <tr>
                      <th className='text-center' width="5%">ID</th>
                      <th width="10%">คำนำหน้า</th>
                      <th width="12%">ชื่อ</th>
                      <th width="12%">นามสกุล</th>
                      <th width="12%">ชื่อผู้ใช้</th>
                      <th width="8%">เพศ</th>
                      <th width="10%">วันเกิด</th>
                      <th width="20%" className="text-center">จัดการ</th>
                      <th width="11%" className="text-center">ที่อยู่</th>
                    </tr>
                  </thead>
        <tbody>
           {loading ? (
             <tr>
               <td colSpan="9" className="text-center py-4">
                 <div className="spinner-border text-primary" role="status">
                   <span className="visually-hidden">Loading...</span>
                 </div>
                 <p className="mt-2">กำลังโหลดข้อมูล...</p>
               </td>
             </tr>
           ) : items.length === 0 ? (
             <tr>
               <td colSpan="9" className="text-center py-4">
                 <i className="bi bi-exclamation-circle text-warning fs-1"></i>
                 <p className="mt-2">ไม่พบข้อมูลผู้ใช้</p>
               </td>
             </tr>
           ) : (
             items.map((item) => (
               <tr key={item.id} className="align-middle" style={styles.tableRow}>
                 <td className='text-center'>{item.id}</td>
                 <td>{item.firstname || '-'}</td>
                 <td>{item.fullname || '-'}</td>
                 <td>{item.lastname || '-'}</td>
                 <td>{item.username || '-'}</td>
                 <td>
                   {item.sex === 'male' ? (
                     <span className="badge bg-primary rounded-pill">ชาย</span>
                   ) : item.sex === 'female' ? (
                     <span className="badge bg-danger rounded-pill">หญิง</span>
                   ) : item.sex === 'other' ? (
                     <span className="badge bg-secondary rounded-pill">อื่นๆ</span>
                   ) : (
                     <span className="badge bg-light text-dark rounded-pill">ไม่ระบุ</span>
                   )}
                 </td>
                 <td>
                   {item.birthday ? (
                     new Date(item.birthday).toLocaleDateString('th-TH', {
                       year: 'numeric',
                       month: 'short',
                       day: 'numeric'
                     })
                   ) : '-'}
                 </td>
                 <td className="text-center">
                    <div className="d-flex justify-content-center gap-1">
                      <button
                        className="btn btn-info btn-sm rounded-pill shadow-sm"
                        type="button"
                        onClick={() => handleViewDetails(item)}
                        style={{
                          background: '#36b9cc',
                          border: 'none',
                          color: 'white',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <i className="bi bi-eye me-1"></i>ดู
                      </button>
                      <Link 
                        href={`/admin/users/edit/${item.id}`} 
                        className="btn btn-warning btn-sm rounded-pill shadow-sm"
                        style={styles.editButton}
                      >
                        <i className="bi bi-pencil-square me-1"></i>แก้ไข
                      </Link>
                      <button 
                        className="btn btn-danger btn-sm rounded-pill shadow-sm" 
                        type="button" 
                        onClick={() => handleDelete(item.id)}
                        style={styles.deleteButton}
                      >
                        <i className="bi bi-trash me-1"></i>ลบ
                      </button>
                    </div>
                  </td>
                  <td className="text-center">
                    <span className="badge bg-light text-dark">
                      {item.address ? item.address.substring(0, 15) + '...' : '-'}
                    </span>
                  </td>
               </tr>
             ))
           )}
         </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Modal for user details */}
    {showModal && selectedUser && (
      <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content border-0 shadow-lg rounded-4 overflow-hidden">
            <div className="modal-header" style={styles.cardHeader}>
              <h5 className="modal-title text-white fw-bold">
                <i className="bi bi-person-badge me-2"></i>
                รายละเอียดผู้ใช้
              </h5>
              <button type="button" className="btn-close btn-close-white" onClick={() => setShowModal(false)}></button>
            </div>
            <div className="modal-body p-4">
              <div className="row">
                <div className="col-md-4 text-center mb-4 mb-md-0">
                  <div className="avatar-container mb-3" style={{ width: '150px', height: '150px', margin: '0 auto' }}>
                    <div style={{ 
                      width: '100%', 
                      height: '100%', 
                      borderRadius: '50%', 
                      background: 'linear-gradient(135deg, #4e73df 0%, #224abe 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      color: 'white',
                      boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)'
                    }}>
                      <i className="bi bi-person"></i>
                    </div>
                  </div>
                  <h5 className="fw-bold mb-1">{selectedUser.firstname} {selectedUser.fullname} {selectedUser.lastname}</h5>
                  <p className="text-muted mb-3">@{selectedUser.username}</p>
                  <div className="d-flex justify-content-center">
                    <span className="badge bg-primary rounded-pill px-3 py-2 me-2">
                      <i className="bi bi-person-fill me-1"></i>
                      ผู้ใช้ทั่วไป
                    </span>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4">
                        <div className="card-body">
                          <h6 className="card-subtitle mb-2 text-muted">ชื่อผู้ใช้</h6>
                          <p className="card-text fw-bold">{selectedUser.username || '-'}</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4">
                        <div className="card-body">
                          <h6 className="card-subtitle mb-2 text-muted">เพศ</h6>
                          <p className="card-text fw-bold">
                            {selectedUser.sex === 'male' ? 'ชาย' : 
                             selectedUser.sex === 'female' ? 'หญิง' : 
                             selectedUser.sex === 'other' ? 'อื่นๆ' : '-'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4">
                        <div className="card-body">
                          <h6 className="card-subtitle mb-2 text-muted">วันเกิด</h6>
                          <p className="card-text fw-bold">
                            {selectedUser.birthday ? 
                              new Date(selectedUser.birthday).toLocaleDateString('th-TH', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              }) : '-'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="card h-100 border-0 shadow-sm rounded-4">
                        <div className="card-body">
                          <h6 className="card-subtitle mb-2 text-muted">วันที่สมัคร</h6>
                          <p className="card-text fw-bold">
                            {selectedUser.createdAt ? 
                              new Date(selectedUser.createdAt).toLocaleDateString('th-TH', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              }) : '-'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="card h-100 border-0 shadow-sm rounded-4">
                        <div className="card-body">
                          <h6 className="card-subtitle mb-2 text-muted">ที่อยู่</h6>
                          <p className="card-text fw-bold">{selectedUser.address || '-'}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                <i className="bi bi-x-circle me-1"></i>ปิด
              </button>
              <Link href={`/admin/users/edit/${selectedUser.id}`} className="btn btn-warning">
                <i className="bi bi-pencil-square me-1"></i>แก้ไขข้อมูล
              </Link>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
}