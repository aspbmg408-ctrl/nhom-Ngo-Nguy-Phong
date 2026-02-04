document.getElementById('tourForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Giả lập gửi dữ liệu
    console.log("Đã gửi thông tin BTC:", {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        school: document.getElementById('school').value
    });

    // Mở Modal
    document.getElementById('successModal').style.display = 'flex';
    this.reset();
});

function closeModal() {
    document.getElementById('successModal').style.display = 'none';
}