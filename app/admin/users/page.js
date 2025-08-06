'use client';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export default function Users() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editUser, setEditUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newUser, setNewUser] = useState({
    firstname: '',
    fullname: '',
    lastname: '',
    username: '',
    password: '',
    address: '',
    sex: '',
    birthday: ''
  });


  const handleAddUser = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (res.ok) {
        Swal.fire("สำเร็จ", "เพิ่มผู้ใช้เรียบร้อยแล้ว", "success");
        setShowAddModal(false);
        setNewUser({});
        fetchUsers();
      } else {
        Swal.fire("ผิดพลาด", "เพิ่มผู้ใช้ไม่สำเร็จ", "error");
      }
    } catch (err) {
      console.error("FETCH ERROR:", err);
      Swal.fire("ข้อผิดพลาด", "ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์", "error");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/users');
      if (!res.ok) throw new Error('Failed to fetch data');
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถโหลดข้อมูลได้',
        confirmButtonColor: '#dc3545'
      });
    } finally {
      setLoading(false);
    }
  };

  const openEditModal = (user) => {
    setEditUser(user);
    setShowModal(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editUser),
      });

      if (!response.ok) throw new Error('Update failed');

      Swal.fire({
        icon: 'success',
        title: 'อัปเดตสำเร็จ!',
        confirmButtonColor: '#28a745',
      });
      setShowModal(false);
      fetchUsers();
    } catch (error) {
      console.error('Error:', error);
      Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด',
        text: 'ไม่สามารถอัปเดตข้อมูลได้',
        confirmButtonColor: '#dc3545'
      });
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: 'ยืนยันการลบ?',
      text: "คุณต้องการลบผู้ใช้นี้ใช่หรือไม่?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'ลบ',
      cancelButtonText: 'ยกเลิก'
    });

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          Swal.fire({
            icon: 'success',
            title: 'ลบสำเร็จ!',
            confirmButtonColor: '#28a745'
          });
          fetchUsers();
        } else {
          throw new Error('Failed to delete');
        }
      } catch (error) {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'เกิดข้อผิดพลาด',
          text: 'ไม่สามารถลบข้อมูลได้',
          confirmButtonColor: '#dc3545'
        });
      }
    }
  };

  return (
    <div className="min-vh-100" style={{ marginTop: "80px" }}>
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-12">
            {/* Header Stats */}
            <div className="row mb-4">
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card bg-primary text-white border-0 shadow-lg h-100">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <i className="bi bi-people-fill display-6"></i>
                    </div>
                    <div>
                      <h6 className="card-title mb-0">ผู้ใช้ทั้งหมด</h6>
                      <h3 className="mb-0">{items.length}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card bg-success text-white border-0 shadow-lg h-100">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <i className="bi bi-person-check-fill display-6"></i>
                    </div>
                    <div>
                      <h6 className="card-title mb-0">ผู้ใช้ชาย</h6>
                      <h3 className="mb-0">{items.filter(item => item.sex === 'male').length}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card bg-danger text-white border-0 shadow-lg h-100">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <i className="bi bi-person-heart display-6"></i>
                    </div>
                    <div>
                      <h6 className="card-title mb-0">ผู้ใช้หญิง</h6>
                      <h3 className="mb-0">{items.filter(item => item.sex === 'female').length}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-6 mb-3">
                <div className="card bg-warning text-white border-0 shadow-lg h-100">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3">
                      <i className="bi bi-person-plus-fill display-6"></i>
                    </div>
                    <div>
                      <h6 className="card-title mb-0">ผู้ใช้อื่นๆ</h6>
                      <h3 className="mb-0">{items.filter(item => item.sex === 'other' || !item.sex).length}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Card */}
            <div className="card border-0 shadow-lg" style={{ borderRadius: '5px', overflow: 'hidden' }}>
              <div className="card-header" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #667eea 100%)',
                color: 'white',
                padding: '1.5rem'
              }}>
                <div className="d-flex flex-column flex-sm-row justify-content-between align-items-start align-items-sm-center gap-3">
                  <div>
                    <h4 className="mb-1 fw-bold">
                      <i className="bi bi-people-fill me-2"></i>
                      จัดการข้อมูลผู้ใช้
                    </h4>
                    <p className="mb-0 opacity-75">
                      <i className="bi bi-calendar-event me-1"></i>
                      อัปเดตล่าสุด: {new Date().toLocaleDateString('th-TH')}
                    </p>
                  </div>
                  <button onClick={() => setShowAddModal(true)} className="btn btn-light btn-lg shadow-sm" style={{ borderRadius: '5px' }}>
                    <i className="bi bi-person-plus-fill me-2"></i>
                    เพิ่มผู้ใช้ใหม่
                  </button>
                </div>
              </div>

              <div className="card-body p-0">
                {/* Desktop View */}
                <div className="d-none d-lg-block">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead style={{ backgroundColor: '#f8f9fc', borderBottom: '2px solid #e3e6f0' }}>
                        <tr>
                          <th className="py-3 text-center" width="5%" style={{ fontWeight: '600', color: '#5a5c69' }}>
                            <i className="bi bi-hash me-1"></i>ID
                          </th>
                          <th className="py-3" width="10%" style={{ fontWeight: '600', color: '#5a5c69' }}>
                            <i className="bi bi-person-badge me-1"></i>คำนำหน้า
                          </th>
                          <th className="py-3" width="15%" style={{ fontWeight: '600', color: '#5a5c69' }}>
                            <i className="bi bi-person me-1"></i>ชื่อ
                          </th>
                          <th className="py-3" width="15%" style={{ fontWeight: '600', color: '#5a5c69' }}>
                            <i className="bi bi-person me-1"></i>นามสกุล
                          </th>
                          <th className="py-3" width="12%" style={{ fontWeight: '600', color: '#5a5c69' }}>
                            <i className="bi bi-at me-1"></i>Username
                          </th>
                          <th className="py-3 text-center" width="8%" style={{ fontWeight: '600', color: '#5a5c69' }}>
                            <i className="bi bi-gender-ambiguous me-1"></i>เพศ
                          </th>
                          <th className="py-3" width="10%" style={{ fontWeight: '600', color: '#5a5c69' }}>
                            <i className="bi bi-calendar3 me-1"></i>วันเกิด
                          </th>
                          <th className="py-3" width="15%" style={{ fontWeight: '600', color: '#5a5c69' }}>
                            <i className="bi bi-geo-alt me-1"></i>ที่อยู่
                          </th>
                          <th className="py-3 text-center" width="10%" style={{ fontWeight: '600', color: '#5a5c69' }}>
                            <i className="bi bi-gear me-1"></i>จัดการ
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {loading ? (
                          <tr>
                            <td colSpan="9" className="text-center py-5">
                              <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
                                <span className="visually-hidden">Loading...</span>
                              </div>
                              <div className="fw-bold text-muted">กำลังโหลดข้อมูล...</div>
                            </td>
                          </tr>
                        ) : items.length === 0 ? (
                          <tr>
                            <td colSpan="9" className="text-center py-5">
                              <i className="bi bi-inbox display-1 text-muted mb-3"></i>
                              <div className="fw-bold text-muted">ไม่พบข้อมูลผู้ใช้</div>
                            </td>
                          </tr>
                        ) : (
                          items.map((item, index) => (
                            <tr key={item.id} className="border-bottom" style={{
                              transition: 'all 0.2s ease',
                              backgroundColor: index % 2 === 0 ? '#ffffff' : '#fafbfc'
                            }}>
                              <td className="text-center py-3">
                                <span className="badge bg-light text-dark" style={{ fontSize: '0.9rem' }}>
                                  {item.id}
                                </span>
                              </td>
                              <td className="py-3">{item.firstname || '-'}</td>
                              <td className="py-3">
                                <div className="fw-semibold">{item.fullname || '-'}</div>
                              </td>
                              <td className="py-3">{item.lastname || '-'}</td>
                              <td className="py-3">
                                <code className="bg-light px-2 py-1 rounded">{item.username || '-'}</code>
                              </td>
                              <td className="text-center py-3">
                                <span className={`badge rounded-pill ${item.sex === 'male' ? 'bg-primary' :
                                  item.sex === 'female' ? 'bg-danger' : 'bg-secondary'
                                  }`} style={{ fontSize: '0.8rem', padding: '0.5rem 0.8rem' }}>
                                  <i className={`bi ${item.sex === 'male' ? 'bi-gender-male' :
                                    item.sex === 'female' ? 'bi-gender-female' : 'bi-question-circle'
                                    } me-1`}></i>
                                  {item.sex === 'male' ? 'ชาย' :
                                    item.sex === 'female' ? 'หญิง' : 'อื่นๆ'}
                                </span>
                              </td>
                              <td className="py-3">
                                <small className="text-muted">
                                  <i className="bi bi-calendar-date me-1"></i>
                                  {item.birthday || 'ไม่ระบุ'}
                                </small>
                              </td>
                              <td className="py-3">
                                <div className="text-truncate" style={{ maxWidth: '150px' }} title={item.address}>
                                  <small className="text-muted">
                                    <i className="bi bi-geo-alt-fill me-1"></i>
                                    {item.address || 'ไม่ระบุ'}
                                  </small>
                                </div>
                              </td>
                              <td className="text-center py-3">
                                <div className="btn-group btn-group-sm shadow-sm">
                                  <button
                                    className="btn btn-outline-warning"
                                    onClick={() => openEditModal(item)}
                                    title="แก้ไข"
                                    style={{ borderRadius: '8px 0 0 8px' }}
                                  >
                                    <i className="bi bi-pencil-square"></i>
                                  </button>
                                  <button
                                    className="btn btn-outline-danger"
                                    onClick={() => handleDelete(item.id)}
                                    title="ลบ"
                                    style={{ borderRadius: '0 8px 8px 0' }}
                                  >
                                    <i className="bi bi-trash3"></i>
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Mobile View */}
                <div className="d-lg-none p-3">
                  {loading ? (
                    <div className="text-center py-5">
                      <div className="spinner-border text-primary mb-3" role="status" style={{ width: '3rem', height: '3rem' }}>
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <div className="fw-bold text-muted">กำลังโหลดข้อมูล...</div>
                    </div>
                  ) : items.length === 0 ? (
                    <div className="text-center py-5">
                      <i className="bi bi-inbox display-1 text-muted mb-3"></i>
                      <div className="fw-bold text-muted">ไม่พบข้อมูลผู้ใช้</div>
                    </div>
                  ) : (
                    <div className="row g-3">
                      {items.map((item) => (
                        <div key={item.id} className="col-12">
                          <div className="card border-0 shadow-sm h-100" style={{
                            borderRadius: '15px',
                            background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fc 100%)',
                            transition: 'transform 0.2s ease'
                          }}>
                            <div className="card-body p-3">
                              <div className="d-flex justify-content-between align-items-start mb-3">
                                <div className="flex-grow-1">
                                  <h6 className="card-title mb-1 fw-bold text-primary">
                                    <i className="bi bi-person-circle me-2"></i>
                                    {item.firstname} {item.fullname} {item.lastname}
                                  </h6>
                                  <div className="d-flex align-items-center mb-2">
                                    <small className="text-muted me-3">
                                      <i className="bi bi-hash me-1"></i>ID: {item.id}
                                    </small>
                                    <code className="bg-light px-2 py-1 rounded small">
                                      <i className="bi bi-at me-1"></i>{item.username}
                                    </code>
                                  </div>
                                </div>
                                <span className={`badge rounded-pill ${item.sex === 'male' ? 'bg-primary' :
                                  item.sex === 'female' ? 'bg-danger' : 'bg-secondary'
                                  }`}>
                                  <i className={`bi ${item.sex === 'male' ? 'bi-gender-male' :
                                    item.sex === 'female' ? 'bi-gender-female' : 'bi-question-circle'
                                    } me-1`}></i>
                                  {item.sex === 'male' ? 'ชาย' :
                                    item.sex === 'female' ? 'หญิง' : 'อื่นๆ'}
                                </span>
                              </div>

                              <div className="row g-2 mb-3">
                                <div className="col-6">
                                  <div className="p-2 bg-light rounded">
                                    <small className="text-muted d-block">
                                      <i className="bi bi-calendar-date me-1"></i>วันเกิด
                                    </small>
                                    <small className="fw-semibold">{item.birthday || 'ไม่ระบุ'}</small>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="p-2 bg-light rounded">
                                    <small className="text-muted d-block">
                                      <i className="bi bi-geo-alt-fill me-1"></i>ที่อยู่
                                    </small>
                                    <small className="fw-semibold text-truncate d-block" title={item.address}>
                                      {item.address ? item.address.substring(0, 20) + '...' : 'ไม่ระบุ'}
                                    </small>
                                  </div>
                                </div>
                              </div>

                              <div className="d-grid gap-2 d-md-flex">
                                <button
                                  className="btn btn-warning flex-fill shadow-sm"
                                  onClick={() => openEditModal(item)}
                                  style={{ borderRadius: '10px' }}
                                >
                                  <i className="bi bi-pencil-square me-2"></i>แก้ไข
                                </button>
                                <button
                                  className="btn btn-danger flex-fill shadow-sm"
                                  onClick={() => handleDelete(item.id)}
                                  style={{ borderRadius: '10px' }}
                                >
                                  <i className="bi bi-trash3 me-2"></i>ลบ
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && editUser && (
          <div className="modal fade show d-block" tabIndex="-1" style={{
            backgroundColor: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(5px)'
          }}>
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
              <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '5px' }}>
                <div className="modal-header border-0" style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #667eea 100%)',
                  color: 'white',
                  borderRadius: '5px 5px 0 0',
                  padding: '1.5rem'
                }}>
                  <h5 className="modal-title fw-bold">
                    <i className="bi bi-person-gear me-2"></i>
                    แก้ไขข้อมูลผู้ใช้
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="modal-body" style={{ padding: '1.5rem' }}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="firstname"
                          value={editUser.firstname || ''}
                          onChange={(e) => setEditUser({ ...editUser, firstname: e.target.value })}
                        >
                          <option value="">-- เลือกคำนำหน้า --</option>
                          <option value="นาย">นาย</option>
                          <option value="นางสาว">นางสาว</option>
                          <option value="นาง">นาง</option>
                          <option value="ดร.">ดร.</option>
                        </select>
                        <label htmlFor="firstname">
                          <i className="bi bi-person-badge me-2"></i>คำนำหน้า
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          value={editUser.fullname || ''}
                          onChange={(e) => setEditUser({ ...editUser, fullname: e.target.value })}
                          placeholder="ชื่อ"
                        />
                        <label htmlFor="fullname">
                          <i className="bi bi-person me-2"></i>ชื่อ
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          value={editUser.lastname || ''}
                          onChange={(e) => setEditUser({ ...editUser, lastname: e.target.value })}
                          placeholder="นามสกุล"
                        />
                        <label htmlFor="lastname">
                          <i className="bi bi-person me-2"></i>นามสกุล
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          value={editUser.username || ''}
                          onChange={(e) => setEditUser({ ...editUser, username: e.target.value })}
                          placeholder="Username"
                        />
                        <label htmlFor="username">
                          <i className="bi bi-at me-2"></i>Username
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={editUser.password || ''}
                          onChange={(e) => setEditUser({ ...editUser, password: e.target.value })}
                          placeholder="รหัสผ่าน"
                        />
                        <label htmlFor="password">
                          <i className="bi bi-key me-2"></i>รหัสผ่าน
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="address"
                          style={{ height: '80px' }}
                          value={editUser.address || ''}
                          onChange={(e) => setEditUser({ ...editUser, address: e.target.value })}
                          placeholder="ที่อยู่"
                        ></textarea>
                        <label htmlFor="address">
                          <i className="bi bi-geo-alt me-2"></i>ที่อยู่
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="sex"
                          value={editUser.sex || ''}
                          onChange={(e) => setEditUser({ ...editUser, sex: e.target.value })}
                        >
                          <option value="">-- เลือกเพศ --</option>
                          <option value="male">ชาย</option>
                          <option value="female">หญิง</option>
                          <option value="other">อื่นๆ</option>
                        </select>
                        <label htmlFor="sex">
                          <i className="bi bi-gender-ambiguous me-2"></i>เพศ
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control"
                          id="birthday"
                          value={editUser.birthday || ''}
                          onChange={(e) => setEditUser({ ...editUser, birthday: e.target.value })}
                          placeholder="01/01/2000"
                        />
                        <label htmlFor="birthday">
                          <i className="bi bi-calendar3 me-2"></i>วันเกิด
                        </label>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="modal-footer border-0" style={{ padding: '1.5rem' }}>
                  <button
                    type="button"
                    className="btn btn-light btn-lg shadow-sm"
                    onClick={() => setShowModal(false)}
                    style={{ borderRadius: '5px', minWidth: '120px' }}
                  >
                    <i className="bi bi-x-circle me-2"></i>ยกเลิก
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg shadow-sm"
                    onClick={handleUpdate}
                    style={{
                      background: 'linear-gradient(135deg, #667eea 0%, #667eea 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      minWidth: '120px'
                    }}
                  >
                    <i className="bi bi-check-circle me-2"></i>บันทึก
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAddModal && (
          <div
            className="modal fade show d-block"
            tabIndex="-1"
            style={{
              backgroundColor: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(5px)'
            }}
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
              <div className="modal-content border-0 shadow-lg" style={{ borderRadius: '5px' }}>
                <div
                  className="modal-header border-0"
                  style={{
                    background: 'linear-gradient(135deg, #28a745 0%, #28a745 100%)',
                    color: 'white',
                    borderRadius: '5px 5px 0 0',
                    padding: '1.5rem'
                  }}
                >
                  <h5 className="modal-title fw-bold">
                    <i className="bi bi-person-plus me-2"></i>
                    เพิ่มผู้ใช้ใหม่
                  </h5>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={() => setShowAddModal(false)}
                  ></button>
                </div>

                <div className="modal-body" style={{ padding: '1.5rem' }}>
                  <div className="row g-3">
                    {/* ซ้ำกับ modal เดิม เปลี่ยนชื่อ state */}
                    <div className="col-12">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="firstname"
                          value={newUser.firstname || ''}
                          onChange={(e) => setNewUser({ ...newUser, firstname: e.target.value })}
                        >
                          <option value="">-- เลือกคำนำหน้า --</option>
                          <option value="นาย">นาย</option>
                          <option value="นางสาว">นางสาว</option>
                          <option value="นาง">นาง</option>
                          <option value="ดร.">ดร.</option>
                        </select>
                        <label htmlFor="firstname">
                          <i className="bi bi-person-badge me-2"></i>คำนำหน้า
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="fullname"
                          value={newUser.fullname || ''}
                          onChange={(e) => setNewUser({ ...newUser, fullname: e.target.value })}
                          placeholder="ชื่อ"
                        />
                        <label htmlFor="fullname">
                          <i className="bi bi-person me-2"></i>ชื่อ
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="lastname"
                          value={newUser.lastname || ''}
                          onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
                          placeholder="นามสกุล"
                        />
                        <label htmlFor="lastname">
                          <i className="bi bi-person me-2"></i>นามสกุล
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="username"
                          value={newUser.username || ''}
                          onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                          placeholder="Username"
                        />
                        <label htmlFor="username">
                          <i className="bi bi-at me-2"></i>Username
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          value={newUser.password || ''}
                          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                          placeholder="รหัสผ่าน"
                        />
                        <label htmlFor="password">
                          <i className="bi bi-key me-2"></i>รหัสผ่าน
                        </label>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          id="address"
                          style={{ height: '80px' }}
                          value={newUser.address || ''}
                          onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
                          placeholder="ที่อยู่"
                        ></textarea>
                        <label htmlFor="address">
                          <i className="bi bi-geo-alt me-2"></i>ที่อยู่
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <select
                          className="form-select"
                          id="sex"
                          value={newUser.sex || ''}
                          onChange={(e) => setNewUser({ ...newUser, sex: e.target.value })}
                        >
                          <option value="">-- เลือกเพศ --</option>
                          <option value="male">ชาย</option>
                          <option value="female">หญิง</option>
                          <option value="other">อื่นๆ</option>
                        </select>
                        <label htmlFor="sex">
                          <i className="bi bi-gender-ambiguous me-2"></i>เพศ
                        </label>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="date"
                          className="form-control"
                          id="birthday"
                          value={newUser.birthday || ''}
                          onChange={(e) => setNewUser({ ...newUser, birthday: e.target.value })}
                          placeholder="01/01/2000"
                        />
                        <label htmlFor="birthday">
                          <i className="bi bi-calendar3 me-2"></i>วันเกิด
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-footer border-0" style={{ padding: '1.5rem' }}>
                  <button
                    type="button"
                    className="btn btn-light btn-lg shadow-sm"
                    onClick={() => setShowAddModal(false)}
                    style={{ borderRadius: '5px', minWidth: '120px' }}
                  >
                    <i className="bi bi-x-circle me-2"></i>ยกเลิก
                  </button>
                  <button
                    type="button"
                    className="btn btn-lg shadow-sm"
                    onClick={handleAddUser}
                    style={{
                      background: 'linear-gradient(135deg, #28a745 0%, #28a745 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '5px',
                      minWidth: '120px'
                    }}
                  >
                    <i className="bi bi-plus-circle me-2"></i>เพิ่มผู้ใช้
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}