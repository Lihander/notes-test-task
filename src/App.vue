<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <header>
        <div class="container">
          <div class="main-header">
            <h1> {{ title }}</h1>
            <div class="return-btn" v-if="!isHomePage" @click="showCancelEditModal = true">
                <font-awesome-icon icon="times"></font-awesome-icon>
            </div>
            <div class="create-btn" v-else>
              <router-link :to="'/note/0'">
                <font-awesome-icon icon="plus"></font-awesome-icon>
              </router-link>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div class="container">
          <router-view></router-view>
        </div>
      </section>

    </div>

    <BaseModal
            v-if="showCancelEditModal"
            title="Cancel"
            @change="cancelEdit"
            @close="showCancelEditModal = false"
    >
      <div class="delete-body" slot="body">
        <p>Are you sure that you want to cancel edit this note?</p>
      </div>
    </BaseModal>
  </div>
</template>

<script>
  import Notes from './pages/Notes.vue'
  import BaseModal from "@/components/UI/BaseModal.vue";

  export default {
    components: {
      Notes,
      BaseModal
    },
    data () {
      return {
        title: 'Notes',
        showCancelEditModal: false
      }
    },
    computed: {
      isHomePage() {
        return this.$route.name === 'notes'
      }
    },
    methods: {
      cancelEdit() {
        this.showCancelEditModal = false
        this.$router.push({ path: '/' })
      }
    }
  }
</script>

<style lang="scss">
  .container {
    max-width: 800px !important;
  }
  .main-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 36px 0;
    h1 {
      font-size: 32px;
      font-weight: 600;
      color: $primary-color;
    }
    .return-btn {
      svg {
        background-color: $danger-color;
        &:hover {
          background-color: $default-color;
          color: $danger-color;
          border: 1px solid $danger-color;
        }
      }
    }
    svg {
      height: 42px;
      width: 42px !important;
      cursor: pointer;
      font-size: 32px;
      background-color: $success-color;
      color: $default-color;
      padding: 10px;
      border-radius: 50%;
      transition: all 0.3s ease;
      &:hover {
        background-color: $default-color;
        color: $success-color;
        border: 1px solid $success-color;
      }
    }
    @media screen and (max-width: $tableWidth) {
      margin: 0 15px;
    }
  }
</style>
