import React, { useCallback, useEffect, useState } from "react";
import NoteManageBody from "../../components/admin-components/NoteManageBody";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudentNote } from "../../store/notes/studentNotes/studentNotesSlice";
import { deleteteachers } from "../../store/profile/teachers/teachersSlice";
import Check from "../../utils/guard/load/Check";
import {
  deleteTeacherNote,
  getAllTeacherNote,
  updateTeacherNote,
} from "../../store/notes/teacherNotes/teacherNotesSlice";
const TeacherNotesManagement = () => {
  const { records, loading, error } = useSelector((state) => state.teachernote);

  const [filterNote, setfilterNote] = useState([]);
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTeacherNote());
  }, [dispatch]);

  useEffect(() => {
    setfilterNote(records);
  }, [records]);

  useEffect(() => {
    const filter = records.filter((element) => {
      return element?.teacher_name_from?.toLowerCase().includes(value);
    });
    setfilterNote(filter);
  }, [value, records]);

  const handelInput = (event) => {
    setValue(event.target.value);
  };

  const handelDelete = useCallback(
    (id) => {
      dispatch(deleteTeacherNote(id)).then(dispatch(getAllTeacherNote()));
    },
    [dispatch]
  );
  const handelUpdateStatusCode = (item) => {
    dispatch(updateTeacherNote(item)).then(dispatch(getAllTeacherNote()));
  };
  return (
    <div>
      <Check loading={loading} error={error}>
        <NoteManageBody
          handelInput={handelInput}
          handelDelete={handelDelete}
          handelUpdateStatusCode={handelUpdateStatusCode}
          title={"Teacher Notes Table 🙌"}
          filterNote={filterNote}
        />
      </Check>
    </div>
  );
};

export default TeacherNotesManagement;
