import Swal from 'sweetalert2';

export const successSwalService = (title, underText) => {
    return Swal.fire({
      title,
      text: underText,
      icon: 'success',
      confirmButtonColor: 'green',
      customClass: 'auto-width',
      heightAuto: false,
    });
};

export const warningSwalService = (title, underText) => {
    return Swal.fire({
        title,
        text: underText,
        icon: 'info',
        confirmButtonColor: 'orange',
        customClass: 'auto-width warning-swal',
        heightAuto: false,
    });
};

export const errorSwalService = (title, underText) => {
    return Swal.fire({
        title,
        text: underText,
        icon: 'error',
        confirmButtonColor: 'green',
        customClass: 'auto-width',
        heightAuto: false,
    });
};

export const confirmSwalService = (title, text) => {
    return Swal.fire({
        title,
        text,
        icon: 'warning',
        reverseButtons: true,
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: 'red',
        confirmButtonText: 'Sim',
        cancelButtonText: 'Não',
        customClass: 'auto-width',
        heightAuto: false,
      });
};