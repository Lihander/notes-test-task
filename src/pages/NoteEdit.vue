<template>
  <div class="note-edit">
    <div class="note-edit__title">
      <label>Title</label>
      <input v-model="note.title" type="text">
    </div>
    <div class="note-edit__todo-list">
      <label>Todo list</label>
      <TodoItem
              v-for="(item, index) in note.todoItems"
              :key="index"
              :todoItem=item
              @remove="removeTodo(item.id)"
      />
      <AppButton class="btnSuccess" @click="addTodo()">
        <font-awesome-icon icon="plus"></font-awesome-icon>
      </AppButton>
    </div>
    <div class="note-edit__btns">
      <AppButton class="btnSuccess" style="float: left" @click="saveNote(note)">
        <font-awesome-icon icon="save"></font-awesome-icon>
      </AppButton>
      <AppButton v-if="isNoteChanged" class="btnPrimary" @click="discardChange">
        <font-awesome-icon :icon="discardIcon"></font-awesome-icon>
      </AppButton>
      <AppButton v-if="canCancelDiscard" class="btnPrimary" @click="cancelDiscardChange">
        <font-awesome-icon :icon="cancelDiscardIcon"></font-awesome-icon>
      </AppButton>
      <AppButton v-if="note.id" class="btnDanger" style="float: right" @click="showDeleteModal = true">
        <font-awesome-icon icon="trash-alt"></font-awesome-icon>
      </AppButton>
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
  import AppButton from "../components/UI/Button.vue"
  import TodoItem from "../components/TodoItem.vue";
  export default {
    name: "NoteEdit",
    components: {AppButton,TodoItem,BaseModal},
    data() {
      return {
        showDeleteModal: false,
        note: null,
        oldNote: null,
        newNote: null,
        canCancelDiscard: false,
        discardIcon: 'undo',
        cancelDiscardIcon: 'redo'
      }
    },
    created() {
      const id = parseInt(this.$route.params.id)
      this.note = {
        title: '',
        todoItems: []
      }
      if (id) {
        const noteFromStore = this.$store.getters.getNoteById(id)
        if (noteFromStore) {
          this.note = JSON.parse(JSON.stringify(noteFromStore))
        }
      }
      this.oldNote = JSON.parse(JSON.stringify(this.note))
    },
    computed: {
      isNoteChanged() {
        if (JSON.stringify(this.oldNote) !== JSON.stringify(this.note)) {
          this.canCancelDiscard = false
          return true
        }
        return false
      }
    },
    methods: {
      removeNote () {
        this.$store.commit('removeNote', this.note.id)
        this.showDeleteModal = false
        this.$router.push({ path: '/' })
      },
      saveNote(note) {
        if (!note.id) {
          const maxId = this.findMaxId(this.$store.getters.getNotes)
          note.id = maxId + 1
        }
        this.$store.commit('saveNote', note)
        this.$router.push({ path: '/' })
      },
      removeTodo(todoId) {
        const note = this.note
        const todoIndex = note.todoItems.findIndex(item => item.id === todoId)
        if(todoIndex !== -1) {
          note.todoItems.splice(todoIndex, 1)
        }
      },
      discardChange() {
        this.newNote = this.note
        this.note = JSON.parse(JSON.stringify(this.oldNote))
        this.canCancelDiscard = true
      },
      cancelDiscardChange() {
        this.oldNote = JSON.parse(JSON.stringify(this.note))
        this.note = this.newNote
        this.canCancelDiscard = false
      },
      addTodo() {
        const maxId = this.findMaxId(this.note.todoItems)
        this.note.todoItems.push({ id: maxId + 1, title: '', active: false})
      },
      findMaxId(list) {
        let maxId = 1
        list.map(item => {
          if (item.id > maxId) {
            maxId = item.id;
          }
        })
        return maxId
      }
    }
  }
</script>

<style lang="scss">
  .note-edit {
    text-align: center;
    padding: 18px 20px;
    &__title {
      label {
        margin-bottom: 10px;
      }
    }
    &__todo-list {
      margin-top: 10px;
      .btnSuccess {
        width: 30px !important;
        height: 30px;
        margin-top: 0;
        border-radius: 50%;
        padding: 0;
      }
    }
    label {
      width: 100%;
      font-size: 24px;
      font-weight: 600;
      color: $primary-color;
      text-align: left;
    }
    &__btns {
      margin: 10px;
      .btn {
        width: 60px !important;
        height: 60px;
        font-size: 28px;
        margin-top: 0;
        margin-bottom: 10px;
        border-radius: 50%;
        padding: 0;
      }
    }
  }
</style>

