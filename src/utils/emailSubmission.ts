interface FormData {
  name: string;
  phone: string;
  message?: string; 
  model?: string;
  urgency?: string;
}

const validatePhone = (phone: string): boolean => {
  // Allow +421 and spaces/dashes
  const phoneRegex = /^(\+421|0)[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}$/;
  return phoneRegex.test(phone.trim());
};

export async function submitFormToEmail(formData: FormData) {
  try {
    // Validate phone number
    if (!validatePhone(formData.phone)) {
      throw new Error('Invalid phone number format');
    }

    // Clean and format data
    const cleanData = {
      ...formData,
      phone: formData.phone.trim().replace(/\s+/g, ''),
      name: formData.name.trim()
    };

    const response = await fetch('https://formsubmit.co/iproweb.ua@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...cleanData,
        _subject: formData.model
          ? `Service Request: ${formData.model} - ${cleanData.name}`
          : formData.urgency
            ? `Urgent Service Request from ${cleanData.name}`
            : `Contact Request from ${cleanData.name}`,
        _template: 'table',
        _captcha: false
      })
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return true;
  } catch (error) {
    console.error('Error submitting form:', error);
    return false;
  }
}