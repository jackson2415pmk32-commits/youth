function toggleView() { if (currentView === 'shop') {
    const password = prompt("Enter admin password:");

    if (password !== "youthless4lyfe$$$") {
        alert("Incorrect password.");
        return;
    }

    currentView = 'admin';
    document.getElementById('storeView').classList.add('hidden');
    document.getElementById('adminView').classList.remove('hidden');
    document.getElementById('navAdminText').innerText = 'Back to Shop';
    renderAdminDashboard();

} else {    
    currentView = 'shop';
    document.getElementById('adminView').classList.add('hidden');
    document.getElementById('storeView').classList.remove('hidden');
    document.getElementById('navAdminText').innerText = 'Merchant Dashboard';
}
}