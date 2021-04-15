<template>
  <section>
    <header><h1>Contacts App</h1></header>
    <add-new-contact v-on:add-contact="addNewContactHandler" />
    <contact-item
      v-for="contact in contacts"
      :key="contact.id"
      :name="contact.name"
      :phone="contact.phone"
      :email="contact.email"
      :isFavourite="contact.isFavourite"
      v-on:toggle-favourite="toggleContactFavourite"
      v-on:click.left="clickHandler"
      @remove-contact="removeContact"
    />
  </section>
  <p v-if="contacts.length === 0">No contacts to display.</p>
</template>

<script>
const app = {
  data() {
    return {
      contacts: [
        {
          id: "jimmy",
          name: "Jimmy Koogle",
          phone: "8087882829",
          email: "jimmy@koogle.com",
        },
        {
          id: "alex",
          name: "Alexandra Udinof",
          phone: "02465654545",
          email: "alex@udinof.com",
          isFavourite: 1,
        },
      ],
      color: "#42b983"
    };
  },
  // provide: {
  //   hello: "This is me, provider :)"
  // },
  methods: {
    toggleContactFavourite(name) {
      const cont = this.contacts.find((e) => e.name === name);
      cont.isFavourite = cont.isFavourite === 1 ? 0 : 1;
    },
    clickHandler() {
      console.log("On click event for contact");
    },
    addNewContactHandler(obj) {
      this.contacts.push({
        id: new Date().toLocaleString(),
        name: obj.name,
        phone: obj.phone,
        email: obj.email,
        isFavourite: false,
      });
    },
    removeContact(name) {
      // const contactToRemove = this.contacts.findIndex((e) => e.name === name);
      // this.contacts.splice(contactToRemove, 1);
      this.contacts = this.contacts.filter((e) => e.name !== name);
    },
  },
};
export default app;
</script>

<style>

:root {
  --background: "#f00";
}

body {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  padding: 1.5rem;
  margin: 0;
  box-sizing: border-box;
  max-width: 800px;
  margin: auto;
  background: #f0f0f0;
}

header {
  background: v-bind(color);
  border-radius: 16px;
  padding: 8px;
  color: white;
  box-shadow: -6px -7px 10px 2px #fff, 8px 8px 20px #aaa
}

.white-box-neo {
  box-shadow: -12px -12px 20px #fff, 10px 10px 20px 0px #ccc;
  border-radius: 16px;
  padding: 0.5rem 2rem;
  margin-top: 2rem;
  position: relative;
  animation: add-in 0.4s ease-out forwards;
}

.btn-primary {
  padding: 8px 12px;
  outline: none;
  background: #5773d8;
  color: white;
  font-size: 14px;
  border: solid 1px transparent;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: -2px -2px 10px #fff, 1px 1px 10px 0px #999;
  letter-spacing: 1px;
  border-radius: 4px;
  font-weight: 500;
}

.btn-primary:hover {
  background: #375bdd;
}

.btn-primary:disabled {
  background: #aaa;
  pointer-events: none;
}

.btn-ternery {
  background: transparent;
  box-shadow: none;
  color: #333;
  font-weight: bold;
  border: solid 1px #aaa;
  border-style: solid;
  outline: none;
}

.btn-ternery:hover {
  background: #ccc;
}

@keyframes add-in {
  from {
    transform: translateY(-10%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>