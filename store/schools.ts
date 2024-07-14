import { defineStore } from 'pinia'

export type School = {
  id: number;
  name: string;
  description: string;
  owner_id: number;
  logo_path: string;
  cover_path: string;
  created_at: string;
}

export const useSchoolsStore = defineStore('schoolsStore', {
  state: () => {
    return {
      schools: <Array<School>>[],
      currentSchool: <School>{}
    }
  },
})