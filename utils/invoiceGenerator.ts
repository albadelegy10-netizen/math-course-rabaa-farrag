import { jsPDF } from "jspdf";
import { User, PaymentRecord } from "../types";

export const generateInvoicePDF = (student: User, payment: PaymentRecord) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(22);
  doc.setTextColor(79, 70, 229); // Indigo 600
  doc.text("INVOICE / RECEIPT", 105, 20, { align: "center" });
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Receipt ID: ${payment.id}`, 105, 28, { align: "center" });
  doc.text(`Date: ${payment.date}`, 105, 33, { align: "center" });
  
  // Separator
  doc.setDrawColor(220, 220, 220);
  doc.line(20, 40, 190, 40);
  
  // Student Details
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 40);
  doc.setFont("helvetica", "bold");
  doc.text("Billed To:", 20, 50);
  
  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${student.name || student.username}`, 20, 57);
  doc.text(`Username: @${student.username}`, 20, 64);
  doc.text(`Course / Plan: ${student.course || '-'} / ${student.paymentPlan ? student.paymentPlan.replace('_', ' ') : 'Per session'}`, 20, 71);
  
  // Academy Details
  doc.setFont("helvetica", "bold");
  doc.text("From:", 130, 50);
  doc.setFont("helvetica", "normal");
  doc.text("Math Academy", 130, 57);
  doc.text("Eng. Rabaa Farrag", 130, 64);
  
  doc.line(20, 80, 190, 80);
  
  // Payment Details
  doc.setFont("helvetica", "bold");
  doc.text("Payment Details", 20, 90);
  
  doc.setFont("helvetica", "normal");
  doc.text("Description", 20, 100);
  doc.text("Amount", 170, 100, { align: "right" });
  
  doc.line(20, 103, 190, 103);
  
  doc.text(payment.notes || "Tuition Payment", 20, 112);
  doc.text(`$${payment.amount.toFixed(2)}`, 170, 112, { align: "right" });
  
  doc.line(20, 117, 190, 117);
  
  // Total
  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("Total Paid:", 130, 130);
  doc.setTextColor(22, 163, 74); // Green 600
  doc.text(`$${payment.amount.toFixed(2)}`, 170, 130, { align: "right" });
  
  // Footer
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.setFont("helvetica", "normal");
  doc.text("Thank you for your payment!", 105, 270, { align: "center" });
  
  doc.save(`Receipt_${student.username}_${payment.date}.pdf`);
};

export const generateStatementPDF = (student: User) => {
  const doc = new jsPDF();
  
  // Header
  doc.setFontSize(22);
  doc.setTextColor(79, 70, 229); 
  doc.text("PAYMENT STATEMENT", 105, 20, { align: "center" });
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 105, 28, { align: "center" });
  
  // Separator
  doc.setDrawColor(220, 220, 220);
  doc.line(20, 35, 190, 35);
  
  // Student Details
  doc.setFontSize(12);
  doc.setTextColor(40, 40, 40);
  doc.setFont("helvetica", "bold");
  doc.text("Student Details:", 20, 45);
  
  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${student.name || student.username}`, 20, 52);
  doc.text(`Username: @${student.username}`, 20, 59);
  doc.text(`Course: ${student.course || '-'}`, 20, 66);
  
  // Calculating balances
  const sAttendance = student.attendance?.filter(a => a.status === 'present').length || 0;
  
  let pricePerSession = student.pricePerSession;
  if (!pricePerSession) {
    if (student.paymentPlan === 'monthly') {
      pricePerSession = (student.planPrice || 2000) / 12;
    } else if (student.paymentPlan === 'weekly') {
      pricePerSession = (student.planPrice || 600) / 3;
    } else {
      pricePerSession = 200;
    }
  }

  const sDue = sAttendance * pricePerSession;
  const sPaid = student.payments?.reduce((acc, p) => acc + p.amount, 0) || 0;
  const sWallet = sPaid - sDue;
  
  doc.setFont("helvetica", "bold");
  doc.text("Account Summary:", 120, 45);
  doc.setFont("helvetica", "normal");
  doc.text(`Total Due (Sessions): $${sDue.toFixed(2)}`, 120, 52);
  doc.text(`Total Paid: $${sPaid.toFixed(2)}`, 120, 59);
  
  doc.setFont("helvetica", "bold");
  if (sWallet < 0) {
    doc.setTextColor(220, 38, 38);
    doc.text(`Outstanding Balance: $${Math.abs(sWallet).toFixed(2)}`, 120, 66);
  } else {
    doc.setTextColor(22, 163, 74);
    doc.text(`Wallet Credit: $${sWallet.toFixed(2)}`, 120, 66);
  }
  
  doc.setDrawColor(220, 220, 220);
  doc.line(20, 75, 190, 75);
  
  // Table Header
  doc.setTextColor(40, 40, 40);
  doc.setFont("helvetica", "bold");
  doc.text("Transaction History (Payments)", 20, 85);
  
  doc.setFontSize(10);
  doc.text("Date", 20, 95);
  doc.text("Description", 70, 95);
  doc.text("Amount", 170, 95, { align: "right" });
  
  doc.line(20, 98, 190, 98);
  
  let y = 105;
  doc.setFont("helvetica", "normal");
  
  if (student.payments && student.payments.length > 0) {
    // Sort payments by date descending
    const sortedPayments = [...student.payments].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    sortedPayments.forEach((payment) => {
      if (y > 270) {
        doc.addPage();
        y = 20;
      }
      doc.text(payment.date, 20, y);
      doc.text(payment.notes || "Tuition Payment", 70, y);
      doc.text(`$${payment.amount.toFixed(2)}`, 170, y, { align: "right" });
      y += 8;
    });
  } else {
    doc.text("No payments recorded.", 20, y);
  }
  
  // Footer
  doc.setFontSize(10);
  doc.setTextColor(150, 150, 150);
  doc.text("Math Academy", 105, 280, { align: "center" });
  
  doc.save(`Statement_${student.username}.pdf`);
};
