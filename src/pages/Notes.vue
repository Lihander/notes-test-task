<template>
  <div class="notes">
    <div class="note" v-for="note in notes" :key="note.id">
      <div class="note-header">
        <router-link :to="'/note/' + note.id">
          <font-awesome-icon icon="edit"></font-awesome-icon>
        </router-link>
        <p>{{ note.title }}</p>
        <p @click="selectNote(note.id)">
          <font-awesome-icon class="remove-icon" icon="times"></font-awesome-icon>
        </p>
      </div>
      <div class="note-body">
        <TodoItem
                v-for="(item, index) in note.todoItems"
                :key="index"
                :todoItem=item
                :disabled="true"
        />
      </div>
    </div>

    <BaseModal
            v-if="showDeleteModal"
            title="Delete"
            @change="removeNote"
            @close="showDeleteModal = false"
    >
      <div class="delete-body" slot="body">
        <p>Are you sure that you want to delete this note?</p>
      </div>
    </BaseModal>
  </div>
</template>

<script>
  import BaseModal from "../components/UI/BaseModal.vue";
  import TodoItem from "../components/TodoItem.vue";
  export default {
    name: "Notes",
    components: {TodoItem,BaseModal},
    data() {
      return {
        showDeleteModal: false,
        selectedNoteId: null,
      }
    },
    computed: {
      notes() {
        return this.$store.getters.getNotes
      }
    },
    methods: {
      selectNote(id) {
        this.selectedNoteId = id
        this.showDeleteModal = true
      },
      removeNote () {
        this.$store.commit('removeNote', this.selectedNoteId)
        this.showDeleteModal = false
      }
    }
  }
</script>

<style lang="scss">
  .notes {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .note {
    width: 48%;
    padding: 18px 20px;
    margin-bottom: 20px;
    background-color: #ffffff;
    transition: all .25s cubic-bezier(.02,.01,.47,1);
    box-shadow: 0 30px 30px rgba(0,0,0,.02);
    @media screen and (max-width: $tableWidth) {
      width: 100%;
      margin: 0 15px 20px 15px;
    }
  }
  .note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 22px;
      color: $primary-color;
    }
    svg {
      cursor: pointer;
      margin-right: 12px;
      color: $success-color;
      transition: all 0.3s ease;
      &.active {
        color: $primary-color;
      }
      &:hover {
        color: $neutral-placeholder;
      }
    }
    .remove-icon {
      color: $danger-color;
      margin-right: 0;
    }
    &.full {
      justify-content: center;
      p {
        margin-right: 16px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .note-body{
    p {
      margin: 20px 0;
    }
    span {
      font-size: 14px;
      color: #999999;
    }
  }
</style>

